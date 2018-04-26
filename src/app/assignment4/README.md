## Assignment 4

Créer une application Angular contenant un Service GameService et 3 composants : GameComponent, OddComponent et EvenComponent
Le GameComponent doit se trouver dans le AppComponent, et contenir un bouton : “Start”
Quand on clique sur Start, un compteur se lance grâce à RxJS, et toutes les secondes, on ajoute un component dans le GameComponent (les un en dessous des autres), soit un OddComponent ou un EvenComponent en fonction de la parité de la seconde.
Quand le compteur tourne, il faut aussi changer le texte du bouton et indiquer “Stop”.
Cliquer sur Stop va stopper le compteur et enlever tous les component Odd et Even.
Le OddComponent et le EvenComponent doivent prendre en paramètre le nombre de seconde, et l’afficher.
Affichez d’une couleur différente le nombre des secondes contenus dans les component en fonction de la parité du nombre
