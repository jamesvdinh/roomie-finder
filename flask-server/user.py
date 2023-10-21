class User:
    def __init__(self, name, age, gender, num_roommates, year, major, interests, religion, email):
        self.name = name
        self.age = age
        self.gender = gender
        self.num_roommates = num_roommates
        self.year = year
        self.major = major
        self.interests = interests
        self.religion = religion
        self.email = email

    def display(self):
        return f"Name: {self.name}, Age: {self.age}, email: {self.email}"