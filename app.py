from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chart_data')
def chart_data():
    # Datos de ejemplo para el gráfico
    labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]
    values = [60000, 70000, 75000, 80000, 85000, 90000, 100000]
    return jsonify({"labels": labels, "values": values})

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
