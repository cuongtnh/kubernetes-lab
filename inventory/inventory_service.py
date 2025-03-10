# Inventory Service (inventory_service.py)
from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
inventory = [
  { "name": "coffee", "quantity": 100 },
  { "name": "milk", "quantity": 50 }
]

@app.route('/inventory', methods=['GET'])
def get_inventory():
    return jsonify(inventory)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8082)