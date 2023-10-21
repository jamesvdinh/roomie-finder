from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route("/accounts")
def accounts():
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

    new_account = {
        "name": "name4",
        "year": 3,
        "major": 5,
        "age": 20,
        "gender": 0,
        "religion": 1,
        "dietpref": 1
    }

    accounts.append(new_account)
    
    return accounts

if __name__ == "__main__":
    app.run(debug=True)