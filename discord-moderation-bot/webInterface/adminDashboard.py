# adminDashboard.py

import flask

app = flask.Flask(__name__)

@app.route('/')
def admin_dashboard():
    return 'Welcome to the Admin Dashboard!'

if __name__ == '__main__':
    app.run(debug=True)