# Payment Service (payment_service.py)
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/pay', methods=['POST'])
def process_payment():
    data = request.json
    return jsonify({"message": "Payment processed", "payment": data}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081)