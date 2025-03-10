# Order Service (order_service.py)
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/order', methods=['POST'])
def create_order():
    data = request.json
    return jsonify({"message": "Order placed", "order": data}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)