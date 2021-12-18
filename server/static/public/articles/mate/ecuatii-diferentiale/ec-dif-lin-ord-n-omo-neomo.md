# Ecuatii diferentiale liniare de ordinul, de ordinul n, omogene si neomogene 
### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 04.11.2021 

**Definitie**

O ecuatie de forma:

$ a_0(x)y^{(n)} + a_1(x)y^{(n-1)} + ... + a_{n-1}(x)y' + a_n(x)y = f(x) $

unde $ a_1,a_2,...,a_n,f $ sunt functii continue definite pe un interval $ I
\subset \R $ cu $ a_0(x) \ne 0 $ pe $I$ se numeste ecuatie diferentiala liniara
de ordinul n, neomogena cu coeficienti variabili.

Daca $ f(x) \equiv 0 $ pe $I$ ecuatia se numeste:
 - omogena liniara - functia
necunoscuta si toate derivatele sale sunt la puterea intai
 - de ordinul n - derivata de ordinul cel mai mare al functiei necunoscute este
 numarul natural $n$ , $ n \in \N^* $  
 - neomogena - membrul drept al ecuatiei este nenul pe $I$ ; $ f(x) \ne 0 $ pe $I$ .

 **Definitie** \
 Se numeste **operator diferential liniar** de ordinul **n** expresia: \
 $$ A_n = a_0(x) \frac{d^n}{dx^n} + a_1(x) \frac{d^{n-1}}{dx^{n-1}} + ... + a_{n-1}(x) \frac{d}{dx} + a_n(x) $$
 $ A_n(y) = f(x) $ ecuatia **neomogena** \
 $ A_n(y) = 0 $ ecuatia **omogena asociata** \
 $ \frac{d}{dx}(y) = \frac{dy}{dx} = y' $ ;
 $ \frac{d^2}{dx^2}(y) = \frac{d^2y}{dx^2} = y'' $ ; ... ;
 $ \frac{d^n}{dx^n}(y) = \frac{d^ny}{dx^n} = y^{(n)} $

 **Proprietatile operatorului $A_n$ :**
 - (1) **aditivitatea** : $ A_n(y_1 + y_2) = A_n(y_1) + A_n(y_2) $
 - (2) **omogenizarea** : $ A_n(\lambda y) = \lambda A_n(y) , \forall(\lambda) = ct $ .

 **Consecinta** \
 Daca $y_1$ si $y_2$ sunt **solutii ale ecuatiei omogene**, atunci si
 $ y = C_1y_1 + C_2y_2 $ , $C_1, C_2 = ct $ , este de asemenea solutie a ec. omogene: \
 $ A_n(y) = A_n(C_1y_1 + C_2y_2) = A_n(C_1y_1) + A_n(C_2y_2) = C_1A_n(y_1) + C_2A_n(y_2) = C_1 \cdot 0 + C_2 \cdot 0 = 0 $ \
Generalizand, rezulta ca daca $ y_1, y_2, ..., y_n $, ($n$ = ordinul ecuatiei) sunt solutii ale ecuatiei omogene ($ A_n(y) = 0 $), atunci si functia
$ y_1(x) = C_1y_1^{(x)} + ... + C_ny_n^{(x)} $ , cu $C_i, i = \overline{1,n} $ constante
arbitrare, este de asemenea solutie a ecuatiei omogene. \
$ A_n(y) = A_n(C_1y_1+...+C_ny_n) = C_1A_n(y_1)+...+C_nA_n(y_n) = 0 $ \
Astfel functia $ y(x) = \sum_{i=1}^{n}C_iy_i(x) $ poate fi solutia generala a ecuatiei omogene. \
Vom stabili conditiile in care se realizeaza acest lucru.

### Dependenta si independenta liniara (a solutiilor)

**Definitie (1)** \
Fie $ y_i : I \to \R $ , $ i = \overline{1,n} $ n functii reale. Spunem ca ele sunt
independente pe $I$ daca din relatia:
$ \lambda_1 y_1(x) + \lambda_2 y_2(x) + ... \lambda_n y_n(x) = 0 $ ,
pentru $ \forall{x} \in [?,?] $
=> $ \lambda_1 y_1(x) + \lambda_2 y_2(x) + ... + \lambda_n y_n(x) = 0 $ .

**Definitie (2)** \
Fie $ y_i : I \to \R $ , $ i = \overline{1,n} $ n functii derivabile pana la ordinul $n-1$
si cu toate derivatele continue <=> $ y_i \in C^{n-1}(I) $ . \
Determinantul urmator: \
$ W(y_1, y_2, ..., y_n) \overset{def}{=}
\begin{vmatrix}
y_1(x) & y_2(x) & ... & y_n(x) \cr
y_1'(x) & y_2'(x) & ... & y_n'(x) \cr
... & ... & ... & ... \cr
y_1^{(n-1)}(x) & y_2^{(n-1)}(x) & ... & y_n^{(n-1)}(x) \cr
\end{vmatrix}
$ se numeste determinantul lui **Wronski** sau wronskianul celor n functii pe intervalul $I$. \
**Obs** Daca relatia $ \lambda_1 y_1(x) + \lambda_2 y_2(x) + ... + \lambda_n y_n(x) = 0 $
are loc pentru $ \forall x \in I $ , fara ca toti coeficientii $ \lambda_i $ sa fie nuli,
atunci vom spune ca functiile $ y_i(x) $ , $ i = \overline{1,n} $ sunt liniar dependente
pe $I$.\
Deci dace exista $ \lambda_1, \lambda_2, ..., \lambda_n \in \R $ nu toti nuli a.i. 
$ \lambda_1 y_1(x) + \lambda_2 y_2(x) + ... + \lambda_n y_n(x) = 0 $ ,
$ \forall{x} \in I $ vom spune ca $ y_1, y_2, ..., y_n $ sunt liniar dependente pe $I$
si relatia $ \lambda_1 y_1 + \lambda_2 y_2 + ... + \lambda_n y_n = 0 $ este relatia de
dependenta liniara a celor n functii pe intervalul $I$ .

**Teorema 1** Daca functiile $ y_i : I \to \R $ , $ i = \overline{1,n} $ ,
$ y_i \in C^{n-1}(I) $ sunt liniar dependente pe $I$ atunci wronskianul lor este nul
in orice punct din $I$ si reciproc. \
Intr-adevar, conform ipotezei exista numerele $ \lambda_1, \lambda_2, ..., \lambda_n $ ,
nu toate nule, a.i. sa avem:
$ \lambda_1 y_1(x) + \lambda_2 y_2(x) + ... + \lambda_n y_n(x) = 0 $ ,
$ \forall{x} \in I $ \
Derivam succesiv de n ori aceasta relatie:
$
\begin{cases}
\lambda_1 y_1 + \lambda_2 y_2 + ... \lambda_n y_n = 0 \cr
\lambda_1 y_1' + \lambda_2 y_2' + ... \lambda_n y_n' = 0 \cr
... \cr
\lambda_1 y_1^{(n-1)} + \lambda_2 y_2^{(n-1)} + ... + \lambda_n y_n^{(n-1)} = 0
\end{cases}
$ , $ \forall{x} \in I $ \
Avem un sistem omogen de n ecuatii cu n necunoscute:
$ \lambda_1, \lambda_2, ..., \lambda_n $ , nu toate nule <=> sistemul omogen admite si
solutii nebanale Rouche <=> determinantul sistemului trebuie sa fie nul =>
$ W(y_1, y_2, ..., y_n) \equiv 0 $ pe $ I $

**Exemplu** \
Aratati ca functiile $ y_1(x) = x^2 + 1 $ ,  $ y_2(x) = x $ si $ y_3(x) = (x + 1)^2 $
sunt liniar dependente pe $\R$ <=> $ W(y_1, y_2, y_3) \equiv 0 $ pe $\R$ . \
$ W(y_1, y_2, y_3) = 
\begin{vmatrix}
x^2 + 1 & x & (x+1)^2 \cr
2x & 1 & 2(x+1) \cr
2 & 0 & 2 
\end{vmatrix} \overset{C_3-C_1}{=} ... 
= 2(-1)^{1+3} \cdot
\begin{vmatrix}
x & 2x \cr
1 & 2
\end{vmatrix} = 0
$
=> $ y_1 ,y_2, y_3 $ sunt liniar dependente, relatia e dependenta liniara fiind:
$ y_3 - y_1 - 2y_2 = 0 $ .

**Definitie** Un sistem de n solutii ale ecuatiei omogene $ A_n(y) = 0 $ , respectiv
$ \\{y_1, y_2, ..., y_n\\} $ cu proprietatea $ W(y_1, y_2, ..., y_n) \ne 0 $ pe $I$
se numeste sistem fundamental de solutii ale ecuatiei omogene pe $I$ . \
Dezvoltatul? principal pe care se bazeaza algoritmul de determinare a solutiei generale a ecuatiei omogene $ A_n(y) = 0 $ este ... in teorema urmatoare:

**Teorema 2**
Fie $ y_1, y_2, ..., y_n $ , si $ y(n+1) $ functie de clasa $ C^n $ pe $ I$ . Daca
$ W(y_1, y_2, ..., y_n) \ne 0 $ pe $ I $ si $ y_1, y_2, ..., y_n, y $ sunt liniar
dependente pe $ I $ , atunci $ y $ este o combinatie liniara cu coeficienti constante arbitrare, a functiilor $ y_1, y_2, ..., y_n $ <=>
$ \exists(C_1, C_2, ..., C_n) $ , nu toate nule a.i.
$ y = C_1y_1 + C_2y_2 + ... + C_ny_n $
structura solutiei generale a ecuatiei diferentiale de ordinul n, liniara si omogena, rezulta din teorema urmatoare:

**Teorema 3**
fie ecuatia diferentiala liniara de ordinul n, omogena: $ A_n(y) = 0 $ <=>
$ a_0(x)y^{(n)} + a_1(x)y^{(n-1)} + ... + a_{n-1}(x)y' + a_n(x)y = 0 $
unde $ a_i : I \to \R $ , $ i = \overline{0, n} $ sunt functii continue pe $ I $. 
Daca $ W(y_1, y_2, ..., y_n) $ nu este identic nul pe $I$
(<=> $ y_1, y_2, ..., y_n $ sunt liniar independente pe $ I $ )
unde $ A_n(y_i) = 0 $ , $ \forall(i) = \overline{1,n} $ , atunci solutia generala a
ecuatiei $ A_n(y) = 0 $ pe $ I $ este de forma:
$$ y = C_1y_1 + C_2y_2 + ... + C_ny_n $$ , 
unde $C_i, i = \overline{1,n} $ sunt n constante arbitrare, nu toate nule.

Se demonstreaza deci ca multimea solutiilor ecuatiei liniare si omogene de ordinul n,
$ A_n(y) = 0 $ are o structura de spatiu vectorial de dimensiune n
(**egal cu ordinul ecuatiei**). O baza a spatiului solutiilor este formate din n solutii
liniar independente ale ecuatiei $ A_n(y) = 0 $ :
$$ B = \\{y_1, y_2, ..., y_n\\} $$
deci cu proprietatea ca $ W(y_1, y_2, ..., y_n) \ne $ identic nul pe $I$ . Cele n functii
formeaza in acelasi timp si un sistem de generatori pentru acest spatiu \
=> solutia generala a ecuatiei $ A_n(y) = 0 $ este o combinatie liniara cu coeficienti
constante arbitrare ale celor n functii:
$$ y_{omo}= C_1 $$

**Consecinte**:
- (1) $ n $ solutii $ y_1, y_2, ..., y_n $ ale ecuatiei $ A_n(y) = 0 $ formeaza un sistem
fundamental de solutii (o baza a spatiului solutiilor) <=> snt liniar independente pe $I$
<=> $ W(y_1, y_2, ..., y_n) \ne 0 $ pe $I$ .
- (2) $ (n+1) $ solutii ale ecuatiei dif. $ A_n(y) = 0 $ sunt liniar dependente pe $ I $ :
$
\begin{cases}
W(y_1, y_2, ..., y_n) \ne 0 \text{ pe } I \cr
W(y_1, y_2, ..., y_n) = 0 \text{ pe } I 
\end{cases} $.

### Constructia ecuatiei diferentiale de ordinul n liniara si omogena de sistem fundamental determinat?

Fie $ y_1, y_2, ..., y_n : I \to \R $ , $n$ functii de clasa $ C^n $ pe $ I $ si liniar
independente pe $ I $  (sistemul  fundamental de solutii dat) =>
$ w(y_1, y_2, ..., y_n) \ne 0 $ pe $ I $ .

Conform celor precizate anterior acest sistem de n functii determina o unica ecuatie
diferentiala, liniara si omogena de ordinul n care le admite ca sistem fundamental
de solutii.

Ecuatia cautata va fi data de conditia ca $ n + 1 $ funcii: 
$ \\{y, y_1, y_2, ..., y_n \\} $ sa fie liniar dependente pe $ I $ .
A $n+1$ -a functie $ y $, va fi functia necunoscuta a ecuatiei care se obtine din
conditia $ w(y, y_1, y_2, ..., y_n) \equiv 0 $

$ w(y, y_1, y_2, ..., y_n) = 
\begin{vmatrix}
y & y_1 & y_2 & ... & y_n \cr
y' & y'_1 & y'_2 & ... & y'_n \cr
y'' & y''_1 & y''_2 & ... & y''_n \cr
... & ... & ... & ... & ... \cr
y^{(n)} & y_1^{(n)} & y_2^{(n)} & ... & y_n^{(n)}
\end{vmatrix}
\equiv 0
$

- (a) Coeficientul lu i $y^{(n)}$ este
$ (-1)^{1+n} \cdot w(y_1, y_2, ... y_n) \ne 0 $ => ecuatia este de ordinul n
- (b) Ecuatia este verificata de oricare dintre functiile $ y_k : I \to \R $ ,
$ k = \overline{1,n} $ . Intr-adevar inlocuind in $ w(y, y_1, ..., y_n) $ pe $y$ cu
oricare dintre cele n functii $ (y_1, y_2, ..., y_n) $ se va obtine un determinant de
ordinul $ n+1 $ care are doua coloane identice:
$ w(y_k, y_1, y_2, ..., y_k, ..., y_n) \equiv 0 $
=> $ y = C_1y_1 + C_2y_2 + ... + C_ny_n $ .

**Exemplu** \
Sa se determine ecuatia diferentiala omogena, liniara de ordinul $ n $ ,
$ \\{ n = 2, 3, ... \\} $ care au sistemul fundamental de solutii dat: \
$ R = \\{ y_1 = ln(x), y_2 = x\cdot ln(x) \\} $ , $ n = 2 $ , $ x \in (0, \infin) $ .
- (a) Se verifica daca cele doua solutii sunt liniar independente
<=> $ w(y_1, y_2) \ne 0 $ . \
$
w(y_1, y_2) =
\begin{vmatrix}
y_1 & y_2 \cr
y'_1 & y'_2
\end{vmatrix} = 
\begin{vmatrix}
ln(x) & x\cdot ln(x) \cr
\frac{1}{x} & ln(x) + 1
\end{vmatrix} = 
ln(x)(1 + ln(x)) - ln(x) = 
\cancel{ln(x)} + ln^2(x) - \cancel{ln(x)} = ln^2(x) \ne 0
$ ,
$ \forall{x} \in (0, +\infin) \setminus \\{1\\} $ .
=> Cele 2 functii sunt liniar independente.

- (b) Ecuatia cautata se obtine din conditia ca functiile $ y, y_1, y_2 $ sa fie liniar
dependente: \
$ w(y, y_1, y_2) \equiv 0 $ , $ \forall{x} \in (0, \infin) \setminus \\{1\\} $ . \
$ w(y, y_1, y_2) =
\begin{vmatrix}
y & y' & y'' \cr
y_1 & y'_1 & y''_1 \cr
y_2 & y'_2 & y''_2
\end{vmatrix}
$ ;
 $ [(det B = det B^t)] $ ;
$ w(y, y_1, y_2) = 
\begin{vmatrix}
y & y_1 & y_2 \cr
y' & y'_1 & y'_2 \cr
y'' & y''_1 & y''_2
\end{vmatrix}
$ ;
$
w(y, ln(x), x ln(x) ) = 
\begin{vmatrix}
y & ln(x) & xln(x) \cr
y' & \frac{1}{x} & 1+ln(x) \cr
y'' & -\frac{1}{x} & \frac{1}{x}
\end{vmatrix}
\equiv 0 $ ;
$ y \cdot (-1)^{1+1} \cdot
\begin{vmatrix}
\frac{1}{x} & 1+ln(x) \cr
\-\frac{1}{x^2} & \frac{1}{x}
\end{vmatrix} + y' \cdot (-1)^{1+2} \cdot
\begin{vmatrix}
ln(x) & xln(x) \cr
\-\frac{1}{x^2} & \frac{1}{x}
\end{vmatrix} + y'' \cdot (-1)^{1+3} \cdot
\begin{vmatrix}
ln(x) & xln(x) \cr
\frac{1}{x} & 1+ln(x)
\end{vmatrix} = 0
$ \
$ y(\frac{1}{x^2} + \frac{1}{x^2} + \frac{ln(x)}{x^2})
\-y'(\frac{ln(x)}{x} + \frac{ln(x)}{x})
\-y''ln^2(x) \ne 0 $ $ | -1 $ \
$ y''ln^2(x) + 2y'\frac{ln(x)}{x} - y(\frac{2+ln(x)}{x^2}) = 0 $ .

**Exemplu 2** \
$ R = \\{e^x, e^{-x}, e^{2x}\\} $ 
- (a) Cele 3 functii sunt liniar independente <=> \
$ w(y_1, y_2, y_3) \ne 0 $ ;
$
\begin{vmatrix}
e^x & e{-x} & e^{2x} \cr
e^x & -e^{-x} & 2e^{2x} \cr
e^x & + e^{-x} & 4e^{2x}
\end{vmatrix}
\ne 0
$ \
$
e^x \cdot e{-x} \cdot e{2x} \cdot
\begin{vmatrix}
1 & 1 & 1 \cr
1 & -1 & 2 \cr
1 & 1 & 4
\end{vmatrix}
= e^{2x} \cdot
\begin{vmatrix}
2 & 1 & 3 \cr
1 & -1 & 2 \cr
2 & 0 & 6
\end{vmatrix}
= (-1)e^{2x}(12-6) = -6 e^{2x} \ne 0
$
=> Cele 3 functii sunt liniar independente pe $\R$
- (b) Ecuatia cautata se obtine din conditia ca functiile
$ y, y_1, y_2, y_3 $ sa fie liniar dependente pe $\R$ : \
$
w(y, y_1, y_2, y_3) =
\begin{vmatrix}
y & y_1 & y_2 & y_3 \cr
y' & y_1' & y_2' & y_3' \cr
y'' & y_1'' & y_2'' & y_3'' \cr
y''' & y_1''' & y_2''' & y_3'''
\end{vmatrix}
= 0
$ ;
$
\begin{vmatrix}
y & e^x & e^{-x} & e^{2x} \cr
y' & e^x & -e^{-x} & 2e^{2x} \cr
y'' & e^x & e^{-x} & 4e^{2x} \cr
y''' & e^x & -e^{-x} & 8e^{2x}
\end{vmatrix}
= 0
$ \
=> $ y''' - 2y'' - y' + 2y = 0 $ .

**Concluzii**:
- (1) Solutia generala a unei ecuatii liniare si omogene de ordinul n este o
  combinatie liniara cu coeficienti constante arbitrare, de solutiile unui sistem
  fundamental de solutii pe $ I $ , deci o combinatie liniara cu coeficienti de
  elementele unei baze.
- (2) In cazul ecuatiilor cu coeficienti variabili $ a_i(x) $ , $ i = \overline{0,n} $,
nu exista o metoa generala de determinare a unui sistem fundamental de solutii pe $I$.
Pentru astfel de ecuatii se poate obtine solutia problemei Cauchy apeland la metode specifice de calcul numeric.
- (3) De asemenea, nu exista un procedeu general de determinare a unei solutii particulare a ecuatiei omogene.
- (4) Se pot remarca insa urmatoarele situatii, in care se pot determina unele
aranjamente ale sistemului fundamental de solutii:
  - (a) Daca $ \sum_{i=0}^{n} a_i(x) \equiv 0 $ => $ y_1 = e^x $ este 
  solutie a ec. omogene, deci o componenta a sistemului fundamental e solutii;
  - (b) Daca $ \sum_{i=0}^{n} (-1)^{n-i} a_i(x) \equiv 0 $ => $ y_2(x) = e^{-x} $ este
  solutie a ecuatiei omogene;
  - (c) Daca $ a_n(x) \equiv 0 $ => $ y_3 = K $, K = constanta, este solutie;
  - (d) Daca $ x a_n(x) + a_{n-1}(x) \equiv 0 $ => $ y_n = x $ este solutie;
  - (e) Daca se cunoaste o solutie $y_1(x) $ a ecuatiei omogene
  $ A_n(y) = 0 $ atunci prin schimbarea de functie $ y = 2y_1 $ se reduce ordinue
  ecuatiei cu 1 unitate.

Daca se cunosc $k$ solutii $(k+1)$ **particulare si independente**, atunci
procedam analog in $k$ **etape**, in mod succesiv se reduce ordinul ecuatiei initiale
cu $k$ unitati obtinand o ecuatie de ordinul $n-K$.

**Exemplu**
Sa se determine solutia generala a ecuatiei
$ (1-x)y'' + xy' - y = 0 $, $ x \in \R \setminus \\{1\\} $.
- (a) Suma coeficientilor ecuatiei: $ 1 - x + x - 1 = 0 $, $ \forall x $ =>
$ y = e^x $ este solutie din sistemul fundamental.\
$ a_n = -1 $; $ a_{n-1} = x $ \
$ x a_n(x) + a_{n-1}(x) = x(-1) + x = -x + x = 0 $\
=> $ y_2 = x $ este solutie din sistemul fundamental. Verificam daca sunt independente:\
$ w(y_1, y_2) =
\begin{vmatrix}
y_1 & y_2 \cr
y'_1 & y'_2
\end{vmatrix}
\=
\begin{vmatrix}
e^x & x \cr
e^x & 1
\end{vmatrix}
\= e^x - xe^x = e^x(1-x) \ne 0 
$, $ \forall x \in \R \setminus \\{1\\} $.\
=> Sunt independente si deci formeaza o baza a spatiului solutiilor:
$ B = \\{e^x, x\\} $. => $ y = C_1 e^x + C_2 x $ , $C_1, C_2$ constante arbitrare.
**EX** Verificare ca $ w(y_1e^x, x) = 0 $ $\equiv$ ecuatia data.

### Ecuatii diferentiale liniare, de ordinul n, neomogene

