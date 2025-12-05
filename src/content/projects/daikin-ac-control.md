---
title: "Daikin AC Control CLI"
description: "Command-line interface tool for controlling Daikin air conditioning systems through their Skyport API"
date: 2025-07-18
excerpt: "A Python CLI tool that provides complete control over Daikin air conditioning systems, enabling temperature monitoring, mode switching, and automated climate management through the Skyport API."
featured: false
technologies: ["Python", "CLI", "API Integration", "Home Automation", "IoT", "pandas", "REST API"]
githubUrl: "https://github.com/JohnEngates/daikin-ac-control"
status: "completed"
---

## Purpose

Managing home climate control systems often requires navigating clunky mobile apps or web interfaces. This CLI tool streamlines the process by providing direct command-line access to Daikin air conditioning systems through their Skyport API. Whether you're automating your home, integrating with other systems, or just prefer the terminal, this tool makes HVAC control as simple as typing a command.

## How It Works

The tool interfaces with Daikin's Skyport cloud platform, which connects to WiFi-enabled Daikin thermostats. Through authenticated API calls, it can:

1. **Query System Status**: Retrieve real-time temperature, humidity, and equipment state
2. **Control Operations**: Change modes, set temperatures, and manage system behavior
3. **Monitor Performance**: Track indoor/outdoor conditions and system runtime

The implementation uses Python's `requests` library for API communication and includes robust error handling for network issues and API limits.

## Key Features

### Real-Time Monitoring
- Indoor and outdoor temperature tracking
- Humidity level monitoring
- Equipment status (compressor, fan, auxiliary heat)
- Current mode and setpoint display
- Color-coded output for easy status recognition

### Control Capabilities
```bash
# Check current status
python ac.py --status

# Set cooling mode
python ac.py --mode cool

# Adjust temperature setpoints
python ac.py --heat 21 --cool 24

# Emergency heat mode
python ac.py --mode emergencyheat

# Turn system off
python ac.py --mode off
```

### Smart Features
- Automatic Celsius/Fahrenheit conversion
- Temperature differential enforcement (prevents overlapping heat/cool setpoints)
- Detailed status reporting with equipment states
- Environment variable configuration for secure credential storage

## Technical Implementation

### API Integration
The tool authenticates with Daikin's Skyport API using email/password credentials stored securely in environment variables. It handles:
- Session management and authentication
- Rate limiting and retry logic
- JSON response parsing and validation
- Error handling for network and API issues

### Temperature Management
```python
# Intelligent temperature conversion
def set_temperature(heat_c=None, cool_c=None, heat_f=None, cool_f=None):
    # Converts between Celsius and Fahrenheit
    # Enforces minimum 2°C differential
    # Validates temperature ranges
    # Updates via API with confirmation
```

### Status Display
The CLI provides rich, color-coded output showing:
- 🌡️ Current indoor/outdoor temperatures
- 💧 Humidity levels
- 🔥❄️ Active heating/cooling indicators
- ⚡ Equipment status (compressor, fan, aux heat)
- 🎯 Target setpoints

## Use Cases

### Home Automation Integration
```bash
# Cron job for energy savings
0 8 * * 1-5 python /path/to/ac.py --heat 18 --cool 26  # Workday setback
0 17 * * 1-5 python /path/to/ac.py --heat 21 --cool 24 # Evening comfort
```

### Remote Management
```bash
# SSH into home server and adjust climate
ssh home "cd ~/daikin-cli && python ac.py --mode cool --cool 22"
```

### Energy Monitoring
```bash
# Log temperature data for analysis
python ac.py --status | grep "Indoor Temp" >> ~/temperature_log.csv
```

## Technical Challenges Solved

1. **API Authentication**: Implemented secure session management with credential caching
2. **Temperature Scale Handling**: Seamless conversion between Celsius and Fahrenheit with validation
3. **State Management**: Ensuring valid transitions between heating/cooling modes
4. **Error Recovery**: Graceful handling of network issues, API limits, and invalid states

## Future Enhancements

- **Scheduling System**: Built-in scheduler for temperature programs
- **Data Logging**: SQLite integration for historical tracking
- **Multi-Zone Support**: Control multiple thermostats from one interface
- **Weather Integration**: Adjust setpoints based on weather forecasts
- **Energy Reports**: Generate usage statistics and efficiency metrics
- **Home Assistant Plugin**: Direct integration with popular home automation platforms

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/JohnEngates/daikin-ac-control.git
cd daikin-ac-control

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your Daikin credentials

# Test connection
python ac.py --status
```

This project demonstrates practical IoT integration, API consumption, and user-friendly CLI design—turning complex HVAC systems into simple command-line tools.