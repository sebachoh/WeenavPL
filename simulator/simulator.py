import requests
import random
import time
import json
from datetime import datetime

# Backend URL
API_URL = "http://localhost:3000"

def get_boats():
    try:
        response = requests.get(f"{API_URL}/boats")
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Error fetching boats: {response.status_code}")
            return []
    except Exception as e:
        print(f"Connection error: {e}")
        return []

def generate_telemetry(boat_id):
    # Simulated realistic values
    voltage = round(random.uniform(11.5, 14.2), 2)  # 12V system
    current = round(random.uniform(5.0, 50.0), 2)   # Amps
    power_kw = round((voltage * current) / 1000, 2)
    soc = round(random.uniform(40.0, 100.0), 2)     # State of Charge %
    temperature = round(random.uniform(20.0, 45.0), 1)
    speed = round(random.uniform(0.0, 25.0), 1)     # Knots

    return {
        "boat_id": boat_id,
        "voltage": voltage,
        "current": current,
        "power_kw": power_kw,
        "soc": soc,
        "temperature": temperature,
        "speed": speed
    }

def post_telemetry(data):
    try:
        response = requests.post(
            f"{API_URL}/telemetry",
            json=data,
            headers={"Content-Type": "application/json"}
        )
        if response.status_code == 201:
            print(f"[{datetime.now().strftime('%H:%M:%S')}] Telemetry sent for boat {data['boat_id']}: {data['speed']} nd")
        else:
            print(f"Error sending telemetry: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"Post error: {e}")

def main():
    print("🚢 Weenav Telemetry Simulator Started")
    print(f"Connecting to: {API_URL}")
    print("Press Ctrl+C to stop.\n")

    while True:
        boats = get_boats()
        if not boats:
            print("No boats found. Retrying in 5 seconds...")
            time.sleep(5)
            continue

        for boat in boats:
            boat_id = boat.get('id')
            if boat_id:
                data = generate_telemetry(boat_id)
                post_telemetry(data)
        
        time.sleep(5)

if __name__ == "__main__":
    main()
