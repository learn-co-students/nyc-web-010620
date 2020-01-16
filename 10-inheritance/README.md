# Inheritance, Metaprogramming, Rake

## SWBATs
- [x] Explain the inheritance pattern
- [x] Use inheritance to give different classes access to the same methods
- [x] Explain method lookup
- [ ] Use metaprogramming techniques to make code more robust
- [ ] Use Rake to automate programmer tasks 

## Inheritance
- Getting traits
- Parent-child
- Monies

                Mammals(warm-blooded, 4-appendaged, produces milk, hair, live-birth)
Rodent(prehensile tails)     Primates(digits)      Marsupials(external gestation period)


Method Lookup
When looking at a "variable" Ruby looks in this order
1. Is there a variable in scope with this name?
2. Is there a method within scope with this name?
3. If there is no method within this class, does the parent class have that method? (recursive all the way up to the BasicObject class)
4. If no method found in any of the ancestors, throw error

## Metaprogramming

## Rake