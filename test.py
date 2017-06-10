from flask import Flask, jsonify,render_template,request,make_response
import requests

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route("/hello")
def hello():
    return jsonify({'hello':"Hello World!"})

@app.route('/get_winner', methods=["POST"])
def get_winner():
    if request.method == "POST":
        print(request.get_json(force=True, silent=True))
        return request.data
    #str(jsonify(flask.response))
    #if request.method == "POST":
    #play_dict = request.data
    #print(play_dict)


if __name__ == '__main__':
    app.run()
