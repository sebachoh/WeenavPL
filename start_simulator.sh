#!/bin/bash

# Check if python3 is installed
if ! command -v python3 &> /dev/null
then
    echo "Python3 could not be found. Please install it."
    exit
fi

# Create virtual environment if it doesn't exist
if [ ! -d "simulator/venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv simulator/venv
fi

# Install requirements
echo "Installing dependencies..."
simulator/venv/bin/pip install -r simulator/requirements.txt -q

# Run the simulator
echo "Starting simulation..."
simulator/venv/bin/python simulator/simulator.py
