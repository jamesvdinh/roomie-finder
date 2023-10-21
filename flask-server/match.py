from user import User
from calc import Scores

class Match:
    def __init__(self, user: User, data: list):
        self.user = user
        self.data = data
        self.match = {}
        self.support = Scores()

    def find_best_match(self):
        for i in range(len(self.data)-1):
            # initial score set to 0
            # self.match[self.data[i]] = 0

            # if same gender and same num of roommates
            if self.data[i].gender == self.user.gender:
                if self.data[i].num_roommates == self.user.num_roommates:
                    self.match[self.data[i].display()] = self.support.final(self.user, self.data[i])
            self.support = Scores()
        
        # sort self.match base on scores
        self.match = dict(sorted(self.match.items(), key=lambda x:x[1], reverse=True))
        return self.match

# test code
# user1 = User("ad", 22, "gg", 5, 2, "A", "bb", "c")
# user2 = User("ad", 25, "gg", 5, 2, "aa", "bb", "ccd")
# user3 = User("ad", 27, "g", 5, 2, "aa", "bb", "ccd")
# l = [user1, user2, user3]
# user = User("asdf", 28, "gg", 5, 2, "aa", "c", "w")

# m = Match(user, l)
# print(m.find_best_match())