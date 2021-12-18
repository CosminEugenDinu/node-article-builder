# Ecuatii diferentiale de ordinul N
### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 17.10.2021 

## (1) Notiuni introductive

**Definitie**

Fie
$F(x,y,y',...,y^{(n)})$ o functie reala de
$n + 2$ variablile, 
(*$x$ - variabila independenta, de care depinde $y, y', ... $ .*),
$ F:[a,b] \times E, E \subset R^{n+1}, [a,b] \subset R $ ,
avand argumentele variabila reala $x \in [a,b]$ si o functie reala
$y:[a,b] \to R$, impreuna cu derivatele ei $y', y'',...,y^{(n)}$.
Relatia $F(x,y,y',...,y^{(n)})$ se numeste **ecuatie diferentiala de ordinul n**.

Se numeste **solutie** a acestei ecuatii o functie
$ \varphi(x), \varphi : [a, b] \to R $
avand derivata pana la ordinul **n** inclusiv pe
$[a,b]$ si
$ F(x,\varphi(x), \varphi'(x), ..., \varphi^{(n)}(x)) = 0, $
$ \forall x \in [a,b] $ .

Daca
$n=1$ , (forma explicita: il scot pe y in functie de x), obtinem ecuatii diferentiale de ordinul I, care sunt definite de relatia
$ F(x,y,y') = 0 $ (forma implicita) sau
$ y' = g(x_\alpha, y)$ (forma explicita).

**Exemple:**
1. Ecuatia
$ y' = y + x, y \in R $ este o ecuatie diferentiala de ordinul I. O solutia a sa este 
$ y = e^x - x - 1, x \in R $ . Functia 
$ y(x) = Ce^x - x - 1 $ , unde C este o constanta arbitrara reprezinta o familie de solutii ale ecuatiei date.

1. Ecuatia
$ y'' - y = x, x \in R $ este o ecuatie diferentiala de ordinul II. Functia
$ y = C_1e^x + C_2e^{-x} - x , x \in R $ , cu
$ C_1, C_2 $ constante arbitrare, reprezinta o familie de solutii ale ecuatiei
date. Dand valori particulare lui 
$ C_1 $ si $ C_2 $ , se obtin solutii particulare.

In acest prim capitol ne vom ocupa de ecuatii diferentiale de orinul I.

Ecuatiile diferentiale au ca solutii familii de functii care depind de
constante arbitrare.
Se demonstreaza ca numarul constantelor arbitrare ale solutiei generale 
este egal cu ordinul ecuatiei diferentiale.

**Definitie solutie particulara**\
Prin particularizarea constantelor (dand valori constantelor) din solutia generala,
se obtin solutii numite **particulare** ale ecuatiei.
Dar aceasta particularizare nu se poate face intr-o maniera necontrolata, ci in asa
fel in care se pune o conditie ...

**Definitie solutie particulara**\
O ecuatie diferentiala mai poate avea si solutii numite **singulare**.
O solutie singulara are proprietatea ca verifica ecuatia diferentiala pentru
$ \forall x \in [a, b] $ , dar nu se poate obtine din solutia generala pentru nicio
particularizare posibila a constantelor arbitrare din expresia sa 
(a solutiei generale).

Vom spune ca functia
$ \varphi(x,C) $ este solutia generala a ecuatiti diferentiale de ordinul I. 

$ (1^o) F(x,y,y') = 0 $ , daca
$\varphi $ verifica solutia ecuatiei $(1^o)$ :

$ F(x, \varphi(x,C), \varphi'_x(x,C)) \equiv 0, x \in [a,b] $ .

Solutia generala a unei ecuatii diferentiale poate fi data parametric prin
$ x = \varphi(t, C), y = \psi(t, C), t \in [\alpha, \beta] $ .

Se numeste solutie particulara a ecuatiei
$ F(x, y, y') = 0 $ o functie $ y = \varphi_\alpha(x), x \in [a, b] $ , care se obtine
din solutia generala
$ y = \varphi(x, C) $ dand o valoare particulara constantei arbitrare C.

O solutie
$ y = \psi(x), x \in [a, b] $ a ecuatiei
$ F(x, y, y') = 0 $ care nu se obtine din solutia generala pentru nici o valoare a
constantei C se numeste **solutie singulara**.

**Exemplu**

1. Fie ecuatia
$ y = xy' + y'^2 $ ecuatie diferentiala de ordinul 1, neliniara ( y' la puterea a 2 a => functie parabolica != liniara) are ca **solutie generala** familia dreptelor
$ y = Cx + C^2 , x \in R $ , C = constanta arbitrara .
Dpdv geometric solutia generala reprezinta o familie de drepte ( y = mx + n).
Ecuatia admite si solutia (functia)
$ y = -\frac 1 4 x^2, x \in R $ (geometric este ecuatia unei parabole)
si nu se obtine dintr-o
valoare a lui C, fiind, deci, o **solutie singulara** a ecuatiei.

Verificare:
$ y' = -\frac{2x}4 ; y' = -\frac{x}{2}; xy' + y'^2 = x(-\frac{x}2) + (\frac{x}2)^2; $

## (2) Contidii initiale. Problema lui Cauchy
Fie ecuatia diferentiala
$ (2^o) y' = f(x,y) $ , ecuatie de ordinul 1, $f$ continua in domeniul plan D.

Fie punctul $ (x_0,y_0) \in D $ .

Fie solutia generala a ecuatiei diferentiale date (solutia generala depinde de o ct arbitrara)
$ y = \varphi(x ,C) $ , C = ct arbitrara.

Dpdv geometric ea reprezinta o familie de curbe incluse in D.
Se poate demonstra o teorema de existenta si unicitate a solutiei care arata ca
in anumite conditii ecuatia
$ y' = f(x,y) $ are o solutie unica a carui grafic trece prin punctul
$ (x_0,y_0) \in D $ .

Problema determinarii solutiei ecuatiei
$ y' = f(x,y) $ care pentru
$ x = x_0 $ ia valoarea
$ y = y_0 $ , deci al carui grafic trece prin punctul
$ (x_0,y_0) \in D $ se numeste problema lui Cauchy, iar conditia ca pentru
$ x = x_0 $ solutia sa ia valoarea
$ \varphi(x_0) = y_0 $ se numeste **conditia initiala**.

**Exemplu 1**

Sa se gaseasca solutia ecuatiei diferentiale
$ y' = x + cos(x) $ , care trece prin punctul $(0,2)$.

**Rezolvare:**

1. Cautam sol gen a ecuatiei. Ecuatia este de ordinul 1.

Solutia generala (
$ y = \int f(x) dx + C $
):

$ y = \int f(x)dx + C $

$ y = \int(x + cos(x))dx + C $

$ y = \frac{1}2t^2 \int_0^x + sin(t)\int_0^x +  C $

$ y = \frac 1 2 x^2 \int_0^x + sin(x)\int_0^x +  C $

$ y = \frac{x^2}2 + sin(x) + C $



Pentru
$ x_0 = 0 $ =>
$ y(0) = C $ , $ C = 2 $ ,
$ y(0) = 2 = 0 + \frac{0^2}2 + C $ =>
$ y = \frac{x^2}2 + sin(x) + 2 $ este solutia problemei Cauchy, care pentru
$ x = 0 $ ia valoarea $2$ ( $ y(0) = 2 $ ), sau este din planul $xOy$ care trece prin
punctul $(0, 2)$ .

Multimea solutiilor unei ecuatii diferentiale de ordinul I depinde de o constanta arbitrara. Se poate arata si invers, ca orice familie de plane 
$(3^o) \varphi(x, y, C) = 0, (x,y) \in D $ cu $\varphi$ continua si derivabila partial in D 
in raport cu x si y, verifica o ecuatie diferentiala de ordinul I. Intr-adevar derivam partial in raport cu x:
$ \frac{\delta \varphi}{\delta x} + \frac{\delta \varphi}{\delta y} = 0 $ .
Eliminand pe C intre aceasta relatie si $(3^o)$ rezulta
$ \Phi(x, y, y') = 0 $ , deci o ecuatie diferentiala de ordinul I.

**Exemplu 2**

Fie ecuatia
$ y'' - y = x, x \in R $ .\
Solutia generala a sa este:
$ C_1e^x + C_2e^{-x} - x, x \in R, C_1,C_2 \in R $ constante arbitrare.

Sa se determine solutia problemei Cauchy, care pentru
$ x = 0 $ indeplineste conditiile:
$ y(0) = 1, y'(0) = 0 $ (Adica pleaca dintru-un pct (0,1) si pleaca cu viteza 0
-derivata).

Calculam y(0), ...
$ y(0) = 1 $

$ y'(0) = C_1 - C_2 - 1 $

$ => C_1 + C_2 = 1 $

$ => C_1 - C_2 = 1 $

$ => 2C_1 = 2 => C_1 = 1 $

$ C_2 = 1 - C_1 = 0 $

$ => y = e^x - x $ ; aceasta se numeste solutia problemei Cauchy.


**Exemplu**

Sa se determine ecuatia diferentiala verificata de familia de curbe 
$ y = x^n + Cx + 1, x \in R $ . \
Derivam in raport cu x => 
$ y' = nx^{n-1} + C $ => $ C = y' - nx^{n-1} $ . \
Inlocuim in relatia data: \
$ y = x^n + x(y' - nx^{n-1}) + 1 $
$ y = xy' + (1 -n)x^n + 1 $


### Teorema de existenta si unicitate pentru ecuatii diferentiale de ordinul I. Metoda aproximatiilor succesive

Fie
$ y'' - y = x , x \in R $ o ecuatie diferentiala de ordinul II.
$ y = C_1 + e^x + C_2e^{-x} -x, x \in R $ , $ C_1, C_2 $ = constante-arbitrare. 
$ y = $ solultia generala a ecuatiei
$ y'' - y = x $

$y' = C_1e^x + C_2(-e^{-x}) -1 $

$ y' = C_1e^ - C_2e^{-x} -1 $

$ y'' = C_1e^x + C_2e^{-x} $

$ C_1e^x + C_2e^{-x} - C_1e^x - C_2e^{-x} + 1 = x <=> y'' - y = x $

Solutia generala a ecuatiei diferentiale de ordinul II depinde de doua constante arbitrare, $C_1$ si $C_2$.

$ y = C_1e^x + C_2e^{-x} - x $ reprezinta doua familii de solutii ale ecuatiei. Dand
valori particulare lui $C_1$ si $C_2$ se obtin **solutii particulare** ale ecuatiei.

**Se demonstreaza ca numarul constantelor arbitrare din solutia generala este egal cu ordinul ecuatiei diferentiale.** 

Solutia generala a ecuatiei: 
$ F(x, y, y', y'', ...., y^{(n)}) = 0 $ depinde de $n$ constante arbitrare:
$ y = \varphi(x, C_1, C_2, ..., C_n) $ .

**Solutia singulara** a unei ecuatii diferentiale este acea solutie care nu se poate obtine din solultia generala pentru nici o particularizare posibila a constantelor din solutia generala. 

**Exemplu**

Fie ecuatia 
$ y = xy' + y'^2 $ o ecuatie diferentiala de ordinul 1, neliniara (pentru ca $y'$ e la puterea a doua => functie parabolica != liniara). Solutia generala a
sa este data de 
$ y = Cx + C^2 $ , C = constanta arbitrara.
Dpdv geometric solutia generala este o familie de drepte $ (dreapta: y = mx + n) $ .
Dar si 
$ y = -\frac{1}{4}x^2, x \in R $ este solutie a ecuatiei
$ y = Cx + C^2 $

$ y' = C $

$ Cx + C^2 = Cx + (C)^2 $ ... se verifica pentru $ \forall x \in R $  =>
$ y = Cx + C^2 $ este solutie generala a ecuatiei.

$ y = - \frac{1}4 x^2, x \in R $

$ y' = -\frac{2}4 x $

$ y' = -\frac{1}2 x $

$ y = xy' + y'^2 $

$ -\frac{1}4 x^2 =? x(-\frac{1}{2}x) + (-\frac{1}{2}x)^2 $

$ -\frac{1}{4}x^2 = -\frac{x^2}{2} + \frac{x^2}4 $

$ -\frac{x^2}4 = -\frac{2x^2}4 + \frac{x^3}4 $

$ -\frac{x^2}4 = -\frac{x^2}4 $ <=> ecuatia este verificata de
$ y = -\frac{x^2}4 $ pentru $ x \in R $ =>
Functia
$ y = -\frac{x^2}4 $ (geometric este ecuatia unei parabole) este de asemenea solutie a ec.

Verificare:

$ y' = -\frac{2x}4 $

$ y' = -\frac{x}4 $

$ xy' + y'^2 = x(-\frac{x}2) + (-\frac{x}2)^2 $ ;

D.p.v. geometric, solutia reprezinta o parabola; expresia sa nu se poate ...
din solutia generala
$ y = Cx + C^2 $ (familia de drepte) pentu nici o valoare posibila a constantei C. =>
(Putem sa dam o valoare lui C a.i. o parabola sa devina o dreapta? **NU**. Dar se poate sa-i dam ca valoare o ecuatie).
$ y = -\frac{x^2}4 $ este solutie singulara a ecuatiei.

### Contitii initiale. Problema lui Cauchy

- forma implicita: $ F(x, y, y') = 0 $ ;
- forma explicita: $ y' = f(x, y) $ , ecuatie diferentiala de ordin 1, 
$f$ este o functie continua pe un domeniu D din plan.

Fie punctul
$ (x_0, y_0) \in D $ .

Consideram solutia generala a ecuatiei
$ y' = f(x, y) $ (solutia generala depinde de o constanta arbitrara) ca fiind:
$ y = \varphi(x, C) $ , C = constanta arbitrara.

Dpdv geometric ea reprezinta o familie de curbe incluse in domeniul D.
In anumite conditii (numite conditii initiale sau conditiile lui Cauchy)
se poate demonstra o teorema de existenta si unicitate a solutiei problemei
care verifica aceste conditii initiale, si anume ca ecuatia
$ y' = f(x, y) $ are o solutie unica a carui grafic trece prin punctul
$ (x_0, y_0) \in D $ .

<=> Problema determinarii solutiei ecuatiei
$ F(x, y, y') = 0 $ sau 
$ y' = f(x, y) $ care pentru
$ x = x_0 $ ia valoarea
$ y = y_0 $, deci al carei grafic trece prin punctul
$ (x_0, y_0) \in D $ se numeste problema lui Cauchy, iar conditia ca pentru
$ x = x_0 $ solutia sa ia valoarea 
$ \varphi(x_0) = y_0 $ se numeste **conditia initiala**.

In anumite ipoteze pe care le verifica functiile $F$, respectiv $f$ , care definesc
ecuatia diferentiala, solutia acestei probleme este unica.

Problema determinarii solutiei ecuatiei
$ F(x, y, y') = 0 $ sau
$ y' = f(x, y) $ care pentru
$ x = x_0 $ ia valoarea 
$ y = y_0 $ , iar al carui grafic trece prin punctul 
$ (x_0, y_0) \in D $ , se numeste **problema lui Cauchy**, iar conditia ca pentru 
$ x = x_0 $ functia sa ia valoarea 
$ \varphi(x_0) = y_0 $ se numeste **conditia initiala**.

### (b) Problema lui Cauchy pentru ecuatia diferentiala de ordinul n

Fie ecuatia diferentiala de ordinul n:

$ (1^o) F(x, y, y', y'', ..., y^{(n)}) = 0; y: I \subset R \to R, I \subset R $
(I = interval in R).

Admitem ca functia $F$ verifica ipotezele teoremei de existenta si unicitate a solutiei problemei Cauchy pentru ecuatia $(1^o)$.

Solutia generala a ecuatiei $(1^o)$ depinde de $n$ constante arbitrare esentiale
si este data de 
$ y = \varphi(x, C_1, C_2, ..., C_n) $ , $\varphi$ este o functie de clasa
$ C^n(I) $ (continua si derivabila de n ori, cu toate derivatele continue pe I)
si verifica ecuatia $(1^o)$ in oricare x in I
$ (\forall x \in I )$ :

$ F( $ \
$ x, $ \
$ \varphi(x,C_1,...,C_n), $ \
$ \varphi'(x,C_1,...,C_n), $ \
$ \varphi''(x,C_1,...,C_n), $ \
$ ..., $ \
$ \varphi^{(n)}(x,C_1,...,C_n) $ \
$ ) = 0, \forall x \in I $

### Solutia problemei Cauchy

**Definitie**

Se numeste **solutia problema lui Cauchy** pentru ecuatia $(1^o)$ ,
problema determinarii **solutiei particulare** a ecuatiei, care verifica
urmatoarele conditii, numite **conditiile lui Cauchy** sau **conditii initiale**:

$ (2^o)
\begin{cases}
\varphi(x_0, C_1, C_2, ..., C_n) = y_0 \cr
\varphi'(x_0, C_1, C_2, ..., C_n) = y_0 \cr
\varphi''(x_0, C_1, C_2, ..., C_n) = y_0 \cr
... \cr
\varphi^{(n-1)}(x_0, C_1, C_2, ..., C_n) = y_0 
\end{cases}
$

unde
$ x_0 \in I $ si
$ y_0, y_1, y_2, ..., y_{n-1} $ sunt n numere.

Necunoscutele acestui sistem sunt constatele
$ C_1, C_2, ..., C_n $ . In ipoteza existentei si nicitatii relatiei problemei
Cauchy, acest sistem este compatibil si unic determinat.

2. Se rezolva sistemul $(2^o)$ si se atribuie solutia:

$ (3^o)
\begin{cases}
C_1 = C_1(x_0, y_0, y_1, ..., y_{n-1}) \cr
C_2 = C_2(x_0, y_0, y_1, ..., y_{n-1}) \cr
... \cr
C_n = C_n(x_0, y_0, y_1, ..., y_{n-1}) \cr
\end{cases}
$

=> **solutia este unica**.

Aceste valori se inlocuiesc in expresia solutiei generale:
$ y = \varphi(x_1, C_1, C_2, ..., C_n) $ alcatuin astfel solutia unica a problemei
$(1^o)$ , cu conditiile initiale $(2^o)$ .

**Exemplu**

Sa se determine solutia problemei Cauchy pentru ecuatia diferentiale de ordinul II,
cu conditiile Cauchy precizate:

$ y'' - y = x, x \in R $

$ y_0 = 0 => 
\begin{cases}
y(0) = 0 \cr
y'(0) = 1
\end{cases}
$,

$ x_0 = 0 $ .

Solutia generala a ecuatiei:

$ y = C_1e^x + C_2e^{-x} - x $ ; $C_1$ si $C_2$ sunt constante arbitrare.

S-a verificat ca $y$ este solutia generala a ecuatiei, 
$ \forall x \in R $ .

Aplicam conditiile initiale:

$
\begin{cases}
  y(0) = 0 \cr
  y'(0) = 1
\end{cases}
$ 
$
\begin{cases}
  y(x) = C_1 e^x + C_2e^{-x} - x \cr
  y'(x) = C_1e^x + C_2e^{-x} - 1 
\end{cases}
$

$
\begin{cases}
  y(0) = C_1 + C_2 = 0 \cr
  y'(0) = C_1 - C_2 - 1 = 1
\end{cases}
$
$
\begin{cases}
  C_1 + C_2 = 0 \cr
  C_1 - C_2 - 1 = 1
\end{cases}
$ => 

$ 2C_1 = 2 => C_1 = 1 $

$ C_2 = -C_1; C_2 = -1 $

=>
$ y = e^x - e^{-x} - x $ este solutia problemai Cauchy.

$
\begin{cases}
  y(0) = 1 - 1 = 0 \cr
  y'(0) = 1 + 1 - 1 = 1
\end{cases}
$ .

## Tipuri particulare de solutii pentru ecuatii diferentiale de ordinul 1, rezolvate in raport cu y', integrabile prin metode elementare

1. Ecuatii de forma:
$ y' = f(x), f: I \to R $ care admite primitive pe I.

Solutia generala va fi 
$ y(x) = \int f(x)dx + C $ <=> $ y = F(x) + C $ . Rezolvata prin metode de calcul ale primitivelor:
- 1: Tabloul de calcul al primitivelor functiilor elementare
- 2: Integrarea prin parti
- 3: Integrarea prin metodele (1:) si (2:) de schimbare de variablile.

2. (1^o) Ecuatii diferentiale care provin din anularea unei diferentiale totale
exacte.


Fie
$ F(x, y), F: D \subset R^2 \to R $ , care are derivate partiale de ordinul 1,
continue in D. => $F$ este diferentiabila in D si diferentiala sa este data
de expresia ( $ \delta $ = derivata partiala):

$ \frac{\delta F}{\delta x}dx + \frac{\delta F}{\delta y}dy = dF(x) $

$ P(x, y)dx + Q(x, y)dy = 0 $

unde P si Q sunt continue si au derivate partiale
de ordinul 1 continue intr-un domeniu D din $R^2$ .

Admitem functiile P si Q sunt continue si derivatele partiale de ordinul 1 continue
in D inclus in R^2.

$ y = y(x) $ o functie necunoscuta.

$ y' = \frac{dy}{dx} $ ;

$ P(x, y)dx = -Q(x, y)dy => \frac{dy}{dx} - \frac{P(x,y)}{Q(x,y)} $ <=>

$ y' = f(x, y) $ .

Daca solutia ecuatiei scrisa sub forma:

$ P(x, y)dx + Q(x, y)dy = 0 $

atunci solutia va fi o functie
$ F = F(x, y) $ a.i. F este diferentiabila si diferentiala sa dF este
$ dF = P(x, y)dx + Q(x, y)dy $.

Pe de alta parte
$ dF(x,y) $ diferentiabila in punctul 
$ (x, y) $ 

$ dF(x,y) = \frac{\delta F(x,y)}{\delta x}dx + \frac{\delta F(x,y)}{\delta y}dy$

$ P(x, y) = \frac{\delta F}{\delta x} $ si
$ Q (x, y) = \frac{\delta F}{\delta y} $ => 

$
\begin{cases}
\frac{\delta P}{\delta y} = \frac{\delta}{\delta y}(\frac{\delta F}{\delta x}) = \frac{\delta^2 F}{\delta x \delta y} \cr
\frac{\delta Q}{\delta x} = \frac{\delta}{\delta y}(\frac{\delta F}{\delta y}) = \frac{\delta^2 F}{\delta y \delta x}
\end{cases}
$ => conform criteriului lui Schwarz, ...
$ \frac{\delta P}{\delta y} $ si 
$ \frac{\delta Q}{\delta x} $ sunt continue in D =>

$ \frac{\delta^2 F}{\delta x \delta y} = \frac{\delta^2 F}{\delta y \delta x} $ =>
Functia
$ F(x, y) $ va fi data de relatia:
$ F(x, y) - F(x_0, y_0) = \int_{x_0}^x P(t, y_0)dt + \int_{y_0}^y Q(x,t)dt, (x_0, y_0) \in D $ .

$ dF(x,y) = \frac{\delta F}{\delta x}dx + \frac{\delta F}{\delta y}dy =
P(x,y)dx + Q(x, y)dy $

$ dF(x,y) = 0 $ <=>
$ F(x,y) = C $ este solutia ecuatiei 
$ P(x,y)dx + Q(x,y)dy = 0 $ .

**Exemplu**

$ (sin(y) - \frac{2y}{x^3})dx + (x cos(y) + \frac{1}{x^3})dy = 0 $

Se cere solutia generala a ecuatiei.

$ P(x, y) = sin(y) - \frac{2y}{x^3}; Q(x,y) = x cos(y) + \frac{1}{x^2} $

Verificam daca 
$ \frac{\delta P}{\delta y} = \frac{\delta Q}{\delta x} $

$ \frac{\delta F}{\delta y} = cos(y) - \frac{2}{x^3} ; \frac{\delta Q}{\delta x} =x
cos(y) - \frac{2}{x^3} $

Solutia generala: 
$ F(x, y) $ cu proprietatea
$ dF = Pdx + \delta dy $

$ F(x,y) - F(x_0,y_0) = \int_{x_0}^x (sin(y_0) - \frac{2y_0}{t^3})dt +
\int_{y_0}^{y}(x cos(t) + \frac{1}{x^3})dt = $ 

$ = sin(y_0) t \int_{x_0}^x - 2y_0 \frac{t^{-2}}{-2} \int_{x_0}^x + 
x sin(t) \int_{y_0}^y + \frac{1}{x^2} t \int_{y_0}{y} = $

$ = sin(y_0)(x - x_0) + y_0(\frac{1}{x^2} - \frac{1}{x_0^2}) +
x(sin(y) - sin(y_0)) + \frac{1}{x^2}(y - y_0) = $

$ = x sin(y) + \frac{y}{x^2} - x_0 sin(y_0) - \frac{y_0}{x_0^2} 
x sin(y_0) - \frac{y_0}{x^2} + x sin(y_0) + \frac{y_0}{x^2} = $

$ = x sin(y) + \frac{y}{x^2} - x_0 sin(y_0) = $

$ = x sin(y) + \frac{y}{x^2} = C $ <=>
$ F(x, y) = C $

$ dF(x, y) = \frac{\delta F}{\delta x} dx + \frac{\delta F}{\delta y}dy = 0 $ 
-> ecuatia data initial ...

**Exemplu**
(Trebuie rezolvate teme de control manual ex: pag 49, 50)

**Examplu**
Sa se integreze ecuatia:

$ (\frac{1}{y} - \frac{y}{x^2})dx + (\frac{1}{x} - \frac{x}{y^2})dy = 0 $

$ P(x,y) = \frac{1}y - \frac{y}{x^2}; Q(x,y) = \frac{1}x - \frac{y}{y^2} $

$ \frac{\delta P}{\delta y} = -\frac{1}{y^2} - \frac{1}{x^2}; \frac{\delta Q}{\delta x} =
-\frac{1}{x^2} - \frac{1}{y^2} $ <=>

$ F(x,y) $ , data de relatia
$ F(x,y) - F(x_0,y_0) = \int_{x_0}^x P(t) $

$ \int_{x_0}^x(\frac{1}{y_0} - \frac{y_0}{t^2})dt + \int_{y_0}^y(\frac{1}x - \frac{x}{t^2})dt = 
...
$

$ = \frac{1}{y_0}t\int_{x_0}^x + y^2 \frac{1}t \int_{x_0}^x + \frac{1}x t \int_{y_0}^y + \frac{1}t \int_{t=y_0}^{t=y} = $

$ = \frac{1}{y_0} (x-x_0) + y^2 (\frac{1}x - \frac{1}{x_0}) + \frac{1}x (y - y_0) + x (\frac{1}y - \frac{1}{y_0}) = $

$ = (\frac{y}{x} + \frac{x}{y}) - (\frac{x_0}{y_0} + \frac{y_0}{x_0}) = F(x,y) - F(x_0,y_0) $

$ => F(x,y) = (\frac{x}{y} + \frac{y}{x}) $

Solutia ecuatiei este definita implicit prin relatia $ F(x,y) = C $ .

$ <=> \frac{x}{y} + \frac{y}{x} = C <=> y = \varphi(x,c) $

$\frac{x^2 + y^2}{xy} = C; y^2 + x^2 = Cxy $

$ y_{1,2} = \frac{Cx \pm \sqrt{C^2x^2 - yx^2}}{2}$

Verificare: sa se calculeze diferentiala functiei gasite:

$ F(x,y) = \frac{x}{y} + \frac{y}{x} = C $

$ dF(x,y) = dC = 0 $

$ \frac{\delta F}{\delta x} = \frac{1}{y} - \frac{y}{x^2} $

$ \frac{\delta F}{\delta y} = - \frac{x}{y} + \frac{1}{x} $

$ dF = (\frac{1}{y} - \frac{y}{x^2})dx + (\frac{1}{x} - \frac{x}{y^2})dy = 0 $


**Aplicatii (tema)**

- (1) $ (-\frac{1}{x} + y + \frac{y}{x^2+y})dx + (\frac{1}{y} + x - \frac{x}{x^2+y^2})dy = 0 $
- (2) $ x(y^2 + 1)dx + (\frac{1}{\sqrt{1-y^2}} + x^2y)dy = 0 $ 
- (3) ...
- (4) $ (1 + \sqrt{x^2 + y^2})dx + (\sqrt{x^2 + y^2} - 1)dy $
- (5) $ sin(x) - 2yx^3 - (xcos(y) +) ... $

### (2) Ecuatii cu veriabile separate

Formula generala:
$ P(x)dx + Q(y)dy = 0 $, $P, Q$ functii derivabile.

(Tot o ecuatii de tipul anterior, dar mai simple: prima depinde de x, adoua de y).

$ \frac{\delta P}{\delta y} = 0; \frac{\delta Q}{\delta x} = 0 $

$$ F(x,y) - F(x_0,y_0) = \int_{x_0}^{x}{P(t)}dt + \int_{y_0}^{y}{Q(t)} $$

$$ F(x,y) = \int{P(x)}dx - \int{Q(y)}dy $$

**Exemplu**

$ (\frac{x^3 + 1}{x})dx + \frac{y^2-1}{} ... $

$ => \int{\frac{x^3+1}{x}}dx + \int{\frac{y^2-1}{y}}dy = C $

$ \frac{x^3}{3} + \ln{x} + \frac{y^2}{2} - \ln{y} = C $

$ x = 1 => y(x) = 1 => \frac{1}{3} + \ln{1} + \frac{1}{2} - \ln{1} = C $

solutia: $ \frac{x^3}{3} + \ln{\frac{y}{x}} + \frac{y^2}{2} = \frac{5}{6} $ .

### (3) Ecuatii cu variabile separabile

$ P(x) Q_1(y)dx + Q(y)P_1(x)dy = 0 $ 

Daca $ Q_1(y) \ne 0 $ si $P_1(x) \ne 0 $ =>

$ \frac{P(x)}{P_1(x)}dx + \frac{Q(y)}{Q_1(y)}dy = 0 $ ecuatie cu variabile separabile

$ => \int{\frac{P(x)}{P_1(x)}}dx + \int{\frac{Q(y)}{Q_1(y)}}dy = C $

**Exemplu**

$ y' = 1 + \frac{1}{x} - \frac{1}{y^2 + 2} - \frac{1}{x(y^2 + 2)} $

$ y' = (1 + \frac{1}{x})(1 - \frac{1}{y^2 + 2}) $

$ y' = \frac{x+1}{x} \frac{y^2 + 1}{y^2 + 2} $

$ y = \frac{dy}{dx} $

$ \frac{dy}{dx} = \frac{x+1}{x} \frac{y^2 + 1}{y^2 + 2} $

$ dy = \frac{y^2 + 1}{y^2 + 2} \frac{x+1}{x}dx => $

$ => {\frac{y^2 + 2}{y^2 + 1}}dy = \frac{x+1}{x}dx $

$ \int{1 + \frac{1}{y^2+1}}dy = x + \ln{x} + C $

$ y + arctg(y) = x + ln(x) + C => F(x,y) = C $


### Ecuatii diferentiale liniare de ordinul 1. Forma generala.

$ y' + P(x)y + Q(x) = 0 $

Daca $Q(x) \ne 0 $ , ecuatia se numeste **neomogena**.
Daca $Q(x) = 0$ , ecuatia se numeste **omogena**.

**Teorema**

Solutia generala a ecuatiei diferentiale liniare si neomogene de ordinul 1 este
suma dintre solutia generala a ecuatiei omogene asociate si o solutie
particulara a ecuatiei neomogene.

Ecuatia omogena asociata este: $ y' + P(x)y = 0 $ .

**Demonstratie**. Fie $Y_p(x)$ o solutie particulara a ecuatiei neomogene
$y'_p + P(x)y_0 \ne Q(x) = 0 $ . Fie si $y'$ solutia generala a ecuatiei
neomogene asociate. Consideram functia $ z = y + y_p $ .

Care este ecuatia verificata de functia $z$ ?

$ \frac{dz}{dy} = \frac{d(y+y_p)}{dx} = \frac{dy}{dx} + \frac{dy_p}{dx} $

$ => \frac{dy}{dx} + \frac{dy_p}{dx} + P(x)y + P(x)y_p + Q(x) = 0 $

$ \frac{dy}{dx} + P(x)y + \frac{dy_p}{dx} + P(x)y_p + Q(x) = 0 $

=> Solutia generala a ecuatiei initiale este functia $z$ , adica z = suma dintre solutia generala a ecuatiei omogene asociate si o solutie particulara a ecuatiei neomogene.

=> Algoritmul de rezolvare are doua etape:

1. Se determina solutia generala a ecuatiei omogene asociate:

$ y' + P(x)y = 0 $ <=> ecuatie cu variabile separabile

$ y' = -P(x)y => \frac{y'}{y} = -P(x) $ -> ecuatie cu variabile separate

=> $ \int\frac{y'}{y}dy = - \int P(x)dx ln(C) $

=> $ ln(y) = - \int P(x)dx + ln(C) $

=> $ y = e^{\int{P(x)}dx + ln(C)} $

$ y = e^{-\int P(x)dx} e^{ln(C)} $

$$ y = Ce^{-\int P(x)dx} $$

2. Determinarea unei solutii particulare pentru ecuatia neomogena. Se poate face
   prin metoda variatiei constantelor al lui Lagrange.

- Se presupune ca $C$ de fapt nu e constanta, ci functie de $x$ , $ C = C(x) $ in solutia generala a ecuatiei neomogene.

$ y = C(x)e^{-\int P(x)dx} $

- Se pune conditia ca aceasta functie sa verifice ecuatia neomogena. => $ C(x) $ :

$ y' = C'(x)e^{-\int P(x)dx} + C(x)e^{-\int P(x)dx}(-P(x)) $

$$ [ (e^u)' = e'' u ] $$

Ecuatia neomogena devine:

$ C'(x)e^{...} - C(x)P(x)e^{...} + P(x)C(x)e^{...} ... $

=> $...$

=> $ C'(x) = -Q(x)e^{\int P(x)dx} $

=> $ C(x) = -\int{Q(x)e^{\int P(x)dx}}dx + K $

=> $ y(x) = C(x)e^{-\int P(x)dx} $

=> sol: $ y(x) = (k - \int Q(x) e^{\int P(x)dx} dx) e^{-\int P(x)dx} $

$ y(x) = ke^{\int P(x)dx} - (\int Q(x) e^{\int P(x)dx})dx\cdot e^{-\int P(x)dx} $

$$ y = ke^{\int P(x)dx} $$
$$ y_p(x) = (\int Q(x) e^{\int P(x)dx})dx \cdot e^{-\int P(x)dx} $$ 


