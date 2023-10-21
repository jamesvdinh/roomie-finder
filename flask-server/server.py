# from flask import Flask, jsonify, json, request
# from flask_cors import CORS
# import json
# from user import User
# from match import Match

# app = Flask(__name__)
# # CORS(app)

# @app.route("/accounts", methods=["GET", "POST"], strict_slashes=False)
# def accounts():
#     # Store accounts in JSON
    # accounts = [
    # {
    #     "name": "kid",
    #     "age": 19,
    #     "gender": "male",
    #     "num_roommates": 4,
    #     "year": 1,
    #     "major": "CS",
    #     "interests": "no",
    #     "religion": "budd",
    #     "email": "kid@gmail.com"

    # },
    # {
    #     "name": "adult",
    #     "age": 25,
    #     "gender": "male",
    #     "num_roommates": 4,
    #     "year": 3,
    #     "major": "CS",
    #     "interests": "la",
    #     "religion": "chr",
    #     "email": "adult@gmail.com"
    # },
    # {
    #     "name": "girl",
    #     "age": 27,
    #     "gender": "female",
    #     "num_roommates": 4,
    #     "year": 1,
    #     "major": "Data",
    #     "interests": "ball",
    #     "religion": "dao",
    #     "email": "girl@gmail.com"
    # },
    # {
    #     "name": "abc",
    #     "age": 22,
    #     "gender": "female",
    #     "num_roommates": 4,
    #     "year": 4,
    #     "major": "CS",
    #     "interests": "play",
    #     "religion": "chr",
    #     "email": "abc@gmail.com"
    # }]
#     # data = request.get_json()
#     # print(data)

#     new_account = {
#         "name": "input",
#         "age": 24,
#         "gender": "male",
#         "num_roommates": 4,
#         "year": 2,
#         "major": "CS",
#         "interests": "no",
#         "religion": "dao",
#         "email": "input@gmail.com"
#     }

#     accounts.append(new_account)
#     accounts = jsonify(accounts)

#     def getJson():
#         data = []

#         # read json file
#         with open("data\data.json") as file:
#             files = json.load(file)

#         # gathering files and store as User type
#         for i in range(len(files)):
#             data.append(User(files[i]["name"], files[i]["age"], files[i]["gender"], files[i]["num_roommates"], 
#                             files[i]["year"], files[i]["major"], files[i]["interests"], files[i]["religion"], 
#                             files[i]["email"]))
            
#         # user 
#         user_input = data[-1]

#         # return top user match up
#         top_user = Match(user_input, data).find_best_match()
#         return jsonify(top_user)
#     return getJson()

# if __name__ == "__main__":
#     app.run(debug=True)
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
            "name": "Real Mark",
            "year": 4,
            "major": 2,
            "age": 23,
            "gender": 0,
            "religion": 1,
            "dietpref": 0   
        },
        {
            "name": "Fake Mark",
            "year": 2,
            "major": 1,
            "age": 19,
            "gender": 1,
            "religion": 1,
            "dietpref": 1
        },
        {
            "name": "Mark Bot",
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