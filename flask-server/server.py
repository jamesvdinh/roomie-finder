from flask import Flask, jsonify, json, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/accounts", methods=["GET", "POST"], strict_slashes=False)
def accounts():
    # Store accounts in JSON
    accounts = [
        {
            "name": "name1",
            "year": 4,
            "major": 2,
            "age": 23,
            "gender": 0,
            "religion": 1,
            "dietpref": 0   
        },
        {
            "name": "name2",
            "year": 2,
            "major": 1,
            "age": 19,
            "gender": 1,
            "religion": 1,
            "dietpref": 1
        },
        {
            "name": "name3",
            "year": 3,
            "major": 5,
            "age": 20,
            "gender": 0,
            "religion": 1,
            "dietpref": 1
        }
    ]

    if request.method == "POST":
        data = request.get_json()
        
        new_account = {
            "name": data.get("name"),
            "year": data.get("year"),
            "major": data.get("major"),
            "age": data.get("age"),
            "gender": data.get("gender"),
            "religion": data.get("religion"),
            "dietpref": data.get("dietpref")
        }

        accounts.append(new_account)
        print(accounts)

    # Write processing code here
    # // Start Code



    # // End Code
    return jsonify(accounts)

if __name__ == "__main__":
    app.run(debug=True)