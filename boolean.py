a=10 
b=5
c=a % b

def is_even(c): # only for c
    if c == 0:
        return str(True) +" "+"c is even"
    else:
        return str(False) + " "+ "c is odd"

print (is_even(c))

#more advanced for any number
def isEven (num):
    if num % 2 == 0 :
        return str(True) + " "+"the number"+" "+str(num) +" "+"is even"
    else:
        return str(False) +" "+ "the number" +" "+str(num)+" "+ "is odd"
print(isEven(a))