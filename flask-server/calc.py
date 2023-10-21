from user import User

class Scores:
    def __init__(self):
        self.score = 0

    # minimum age = 18, maximum age = 30
    def age_scores(self, user1: User, user2: User):

        if abs(user1.age-user2.age) < 4:
            self.score += 10
        elif abs(user1.age-user2.age) > 8:
            self.score += 3
        else:
            self.score += 6

    def year_scores(self, user1: User, user2: User):
        if abs(user1.year-user2.year) < 3:
            self.score += 8
        else:
            self.score += 4

    def major_scores(self, user1: User, user2: User):
        if user1.major == user2.major:
            self.score += 6

    def interests_scores(self, user1: User, user2: User):
        if user1.interests == user2.interests:
            self.score += 5

    def religion_scores(self, user1: User, user2: User):
        if user1.religion == user2.religion:
            self.score += 10

    def final(self, user1: User, user2: User):
        self.age_scores(user1, user2)
        self.year_scores(user1, user2)
        self.major_scores(user1, user2)
        self.interests_scores(user1, user2)
        self.religion_scores(user1, user2)
        return self.score
    
# test work
# user1 = User("ad", 22, "gg", 5, 2, "A", "bb", "c")
# user2 = User("ad", 25, "gg", 5, 2, "aa", "bb", "ccd")

# s = Scores()
# print(s.final(user1, user2))