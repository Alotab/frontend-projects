class Laptop:
    discount = 6
    def __init__(self, name, price):
        self.__name = name
        self.price = price
        
    def apply(self):
        discounted = (self.price /100)*self.discount
        amount = self.price - discounted
        return amount
        

        
        
class Machine(Laptop):
    super

boss = Laptop("Dell", 8000)

name = boss._Laptop__name
print(f'Laptop name is {name}')

## Discount apply
dicount = boss.apply()
print(f'The new price after discount is {dicount}')

## new discount
boss.discount=20

new_price = boss.apply()
print(f'The new price after customer ask for a specific discount {new_price}')