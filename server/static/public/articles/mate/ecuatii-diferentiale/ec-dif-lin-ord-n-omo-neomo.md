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

**Forma generala**:
$ A_n(y) = f(x) $, $ f: \hat{I} \to \R $ nenula si continua pe $ \hat{I} $ ca
si in cazul ecuatiei liniare si neomogene de ordinul 1 se poate demonstra urmatoarea
teorema:

**Teorema**
Solutia generala a ecuatiei liniare si neomogene, de ordinul n este egala cu suma dintre
solutia generala a ecuatiei omogene asociate si a solutiei particulare a ec. ...
$ y = y_o + y_p $ \
Pentru $ y_o $ avem nevoie de un sistem fundamental de solutii al ecuatiei omogene <=>
de o baza a spatiului solutiilor:
$ B = \\{y_1, y_2, ..., y_n \\} $ =>
$ y_o = C_1y_1 + C_2y_2 + ... + C_ny_n $. \
Pentru determinarea unei solutii particulare a ecuatiei neomogene se poate utiliza:
- metoda variatiei constantelor (Lagrange)
- metoda coeficientilor nedeterninati, daca functi $f(x)$ din membrul drept are o forma
particulara (pentru ecuatiile cu coeficienti constanti) \
$ f(x) = K \cdot e^{\alpha x} $ ; $ f(x) = P_n(x)e^{\alpha x} $ ; $ f(x) = P_n(x)\cdot sin \alpha \cdot x \cdot e^{\alpha x} $ \
Metoda variatiei constantelor consta in urmatoarele:
  - se pleaca de la solutia generala a ec. omogene asociate
  $ y = C_1y_1 + C_2y_2 + ... + C_ny_n$
  - se presupune ca $ C_i = C_i(x) $ , $ i = \overline{1,n} $ (sunt functii derivabile de variabila independenta)
  - se pune conditia ca 
  $ y(x) = C_1(x)y_1 + C_2(x)y_2 + ... + C_n(x)y_n $
  sa verifice **ecuatia omogena**. \
  Se demonstreaza ca derivatele $C'_1(x), C'_2(x), ..., C'_n(x) $ verifica urmatorul sistem de ecuatii algebrice:
  $
  \begin{cases}
  C'_1y_1 + C'_2y_2 + ... + C'_ny_n = 0 \cr
  C'_1y'_1 + C'_2y'_2 + ... + C'_ny'_n = 0 \cr
  ... \cr
  C'_1y^{n-2}_1 + C'_2y^{n-2}_2 + ... + C'_ny^{n-2}_n = 0 \cr
  C'_1y^{n-1}_1 + C'_2y^{n-1}_2 + ... + C'_ny^{n-1}_n = 0 = \frac{f(x)}{a_0(x)}
  \end{cases}
  $ \
  $ \Delta = w(y_1, y_2, ..., y_n) \ne 0 $ => sist are solutie unica => 
  $ \begin{cases}
  C'_1(x) = \varphi_1(x) \cr
  C'_2(x) = \varphi_2(x) \cr
  ... \cr
  C'_n(x) = \varphi_n(x)
  \end{cases} $ => 
  $ \begin{cases}
  C_1(x) = \int \varphi_1(x)dx + K_1 \cr
  ... \cr
  C_n(x) = \int \varphi_n(x)dx + K_n
  \end{cases} $ => \
  $ y = (K_1 + \int{\varphi_1(x)}dx)y_1 + ... + (K_n + \int{\varphi_n(x)}dx)y_n $

  $y = \underbrace{K_1y_1 + ... + K_ny_n}_{y_o} +
   (y_i \cdot \int{\varphi_1(x)}dx + ... + \int{\varphi_n(x)}dx)$ \
  $ y_o = K_1y_1 + ... + K_ny_n $ \
  $ y_p = (y_i \cdot \int{\varphi_1(x)}dx + ... + \int{\varphi_n(x)}dx)$


### Teorema de existenta si unicitate a solutiei problemei Cauchy

Fiind data ecuati diferentiala liniara si neomogena:
$ A_n(y) = f(x) $, cu $ a_i, f: \hat{I} \to \R $ continue pe $\hat{I}$ si
$ a_0(x) \ne 0 $ pe $\hat{I}$, exista si este unica solutia $ y : \hat{I} \to \R $ 
a acestei ecuatii, de clasa $C^n(\hat{I}) $, care satisface ***conditiile initiale***
ale lui Cauchy:
$ \begin{cases}
y(x_0) = y_0 \cr
y'(x_0) = y_1 \cr
y''(x_0) = y_2 \cr
... \cr
y^{(n-1)}(x_0) = y_{n-1} \cr
\end{cases} $, $x_0 \in \hat{I}$, $y_0, y_1, ..., y_{n-1} $ sunt n numere date.

**Exemplu** Fie ec. dif. de ord 3, neomogena $ y''' - 6y'' + 11y' - 6y = 0 $. \
Sa se det. solutia sa generala si solutia problemei Cauchy care satisface cond. initiale:
$ y(x) = 0 $; $y'(0) = 0$; $y''(0) = 1$.

- (1) Se det. un sistem fundamental de solutii pt ec. omogena:
  - se cauta solutii de forma $ y = e^{rx} $ \
  $ r^3 - 6r^2 + 11r - 6 = 0 $. => \
  $ r_1 = 1, r_2 = 2, r_3 = 3 $ => \
  $ \\{ y_1 = e^2, y_2 = e^{2x}, y_3 = e^{3x} \\} $. \
  $ w(y_1, y_2, y_3) \ne 0 $, $ \forall x \in \R $ => \
  $ y_o = C_1e^x + C_2e^{2x} + C_3e^{3x} $ \
  $ \begin{cases}
  y(0) = C_1 + C_2 + C_3 = 0 \cr
  y'(0) = C_1 + 2C_2 + 3C_3 = 0 \cr
  y''(0) = C_1 + 4C_2 + 9C_3 = 1
  \end{cases} $ -> sistem de 3 ec algebrice, cu 3 nec: $C_1, C_2, C_3$ => \
  $ C_1 = \frac{1}{2} $; $ C_2 = -1 $; $ C_3 = \frac{1}{2} $, solutie unica => \
  $ y(x) = \frac{1}{2}e^x - e^{2x} + \frac{1}{2}e^{3x} $ = sol. unica a problemei Cauchy.

Daca ecuatia ar fi fost neomogena, trebuia sa se determine si o solutie particulara prin
metoda variatiei constantelor (Lagrange) si dupa aceea se determina solutia problemei
Cauchy conform algoritmului de mai sus.

#### Principiul superpozitiei (suprapunerii efectelor)
Daca functia $ f(x) $ din membrul drept al ecuatiei dif este o suma de functii 
$ (k = 1, 2, 3, ...) $ <=> \
$ A_n(y) = f_1(x) + f_2(x) + ... + f_k(x) $, atunci se determina cate o solutie
particulara pentru fiecare ecuatie neomogena de tipul urmator:\
(1)
$ \begin{cases}
A_n(y) = f_1(x) -> y_{p_1}(x) \cr
A_n(y) = f_2(x) -> y_{p_2}(x) \cr
... \cr
A_n(y) = f_k(x) -> y_{p_k}(x)
\end{cases} $ prin met. variatiei constantelor sau prin metoa coeficientilor nedeterminati. \
Atunci $ y_p(x) = y_{p_1}(x) + y_{p_2}(x) + ... + y_{p_k}(x) $ = suma tuturor solutiilor
particulare ale fiecarei ecuatii din (1). \
**Obs** Principiul superpozitiei se aplica numai pentru ecualii liniare!

### Ecuatii diferentiale liniare, de ordinul n omogene si neomogene, cu coeficienti constanti

**Forma generala**:
$ a_0y^{(n)} + a_1y^{(n-1)} + ... a_{n-1}y' + a_ny = f(x) $, unde $a_1$,
$i = \overline{0,n} $ sunt constante si $ f: \hat{I} \to \R $ este o functie continua.\
Toate rezultatele ... anterior raman valabile si pentru aceste ecuatii. \
In plus ... si urmatoarele rezultate ..., specifice:
- (a) pentru ecuatia omogena asociata se poate determina intotdeauna un sistem
fundamental de solutii, deci si solutia sa generala
- (b) pentru ecuatia neomogena se poate utiliza metoda coeficientilor nedeterminati
pentru pentru determinarea unei solutii particulare a ecuatiei din membrul drept - are
cateva forme specifice prezentate anterior.

- (a) **Ecuatia omogena asociata**: \
$ A_n(y) = 0 $; $a_0y^{(n)} + a_1y^{(n-1)} + ... + a_{n-1}y' + a_ny = 0$ \
Dupa o idee a lui Euler, se cauta solutii de forma $ y = e^{rx} $, unde $ r = \text{ct} $
sise va determina din conditia ca $ y = e^{rx} $ sa verifice ecuatia omogena. \
$ y = e^{rx} $; $y' = re^{rx} $; $y''=r^2e^{rx}$, ..., $y^{(n)} = r^ne^{rx}$. \
Ecuatia omogena devine: \
$ e^{rx}(a_0r^n + a_1r^{n-1} + ... + a_{n-1}r + a_n) = 0 $ \
cum $ e^{rx} \ne 0$, $\forall x \in \R$ => \
$ \underbrace{a_0r^n + a_1r^{n-1} + ... + a_{n-1}r + a_n}_{K_n(r)=0} = 0 $ \
care este o secuatie algebrica polinomiala de gradul n, numita **ecuatia caracteristica**
asociata ecuatiei dif. omogene. \
Necunoscuta este numarul $ r \in \R, \Complex$, din $ y = e^{rx} $, ... solutie pt ecuatia
diferentiala. \
Radacinile ecuatiei caracteristice, $ K_n(r) = 0 $ pot fi:
- reale:
  - simple (distincte)
  - multiple
- complex conjugate:
  - simple
  - multiple

- (1) $ K_n(r) = 0 $ are $n$ radacini reale si distincte: \
$ r_1 \ne r_2 \ne ... \ne r_n \in \R $. Lor le vor corespunde solutiile: \
$ y_1 = e^{r_1x}, y_2 = e^{r_2x}, ..., y_n = e^{r_nx} $, care formeaza un
sistem fundamental de solutii pentru ecuatia omogena: \
$ w(e^{r_1x}, e^{r_2x}, ..., e^{r_nx}) = 
\begin{vmatrix}
e^{r_1x} & e^{r_2x} & ... & e^{r_nx} \cr
r_1e^{r_1x} & r_2e^{r_2x} & ... & r_ne^{r_nx} \cr
... & ... & ... & ... \cr
r^{n-1}_1 e^{r_1x} & r^{n-1}_2 e^{r_2x} & ... & r^{n-1}_n e^{r_nx}
\end{vmatrix}
= e^{(r_1 + r_2 + ... + r_n)x} \cdot
\begin{vmatrix}
1 & 1 & ... & 1 \cr
r_1 & r_2 & ... & r_n \cr
... & ... & ... & ... \cr
r^{n-1}_1 & r^{n-1}_2 & ... & r^{n-1}_n
\end{vmatrix}
\overset{\text{determinant Vandermonde}}{=} e^{-\frac{a_1}{a_0}x} \cdot
\underset{1 \le i \le j \le n}{\prod}(r_j - r_i) \ne 0 
$ deoarece $ r_i \ne r_j $, $ \forall i \ne j = 1,n $ => \
$ \\{ e^{r_1x}, e^{r_2x}, ..., e^{r_nx} \\} $ = sistem fundamental de solutii => solutia
generala a ec. omogene va fi: \
$ y_o = C_1y_1 + C_2y_2 + ... + C_ny_n $ , sau: \
$ y_o = C_1e^{r_1x} + C_2e^{r_2x} + ... + C_ne^{r_nx} $

**Exemplu**: $ y'' - 5y' + 4y = 0 $. Fie $ y = e^{rx} $ => $ y' = re^{rx} $;
$ y'' = r^2 e^{rx} $ \
$ e^{rx} (r^2 - 5r + 4) = 0 | : e^{rx} \ne 0 $ => \
$ r^2 - 5r + 4 = 0 $ = ecuatia caracteristica asociata ecuatiei omogene. 
-----------
$ ax^2 + bx + c = 0 $ => $ \Delta = b^2 - 4ac $ \
$ x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a} \in \R $
-----------
$ \Delta = 25 - 16 = 9 $ => $ r_{1,2} = \frac{5 \pm \sqrt{9}}{2} $ =>
$
\begin{cases}
r_1 = 4 \cr
r_2 = 1
\end{cases} $ => \
$ y_1 = e^{4x}$, $y_2 = e^x$, $ B = \\{ e^{4x}, e^x\\} $ => $ y_o = C_1e^{4x} + C_2e^x $.

**Exemplu** $ y''' + 3y'' - y' - 3y = 0 $. Sol generala si solutia problemei Cauchy:
$ y(0) = 0 $, $y'(0) = 1$, $y''(0) = -1$.

(2) Ecuatia caracteristica $ K_n(r) = 0 $ are radacini reale si multiple. Se demonstreaza
ca fiecarei radacini reale si multiple de ordinul k ii corespund un numar de k solutii in
sistemul fundamental de solutii al ed dif omogene $ r = \rho_1 $ multipla de
ordinul $k_1$ => ii vor corespunde $k_1$ solutii pt ec dif (independente)
$y_1 = e^{\rho_1x}$, $y_2 = xe^{\rho_1x}$, ..., $y_{k_1} = x^{k_1-1}e^{\rho_1x} $ \
Pentru fiecare rad reala si multipla a ecuatiei caracteristice se procedeaza similar.

**Exemplu** $ y'' - 6y' + 9y = 0 $, $y = e^{rx}$, $y' = re^{rx}$. \
$ y'' = r^2e^{rx} $ => $ e^{rx}(r^2 - yr + 9) = 0 | : e^{rx} $ \
$ r^2 - 6r + 9 = 0 $; $(r-3)^2 = 0 $; $r_1 = r_2 = 3$ => $ y_1 = e^{3x}$, $y_2 = xe^{ex}$\
$ y_o = C_1e^{3x} + C_2xe^{3x}$

(3) Ecuatia $K_n(r) = 0$ are radacini complexe conjugate simple: \
$ r_k = \alpha_k + i\beta_k$; $ \overline{r_k} = \alpha_k - i\beta_k$ => \
$ y_{1k} = e^{\alpha_k x} \cdot cos\beta_k x$;\
$y_{2k} = e^{\alpha_k x} \cdot sin\beta_k x$

(4) Ec caracteristica $K_n(r) = 0$ are radacini complexe conjugate multiple. \
Fie $r_1 = \alpha + i\beta$ si $\overline{r_2} = \alpha - i\beta$ multiple de ordinul
$\rho_1$ fiecare. Lor le corespund urmatoarele solutii in sistemul fundamental al
ecuatiei diferentiale: \
$ \begin{cases}
y_1 = e^{\alpha x} \cdot \beta x; y_2 = xe^{\alpha x}cos\beta x; ....; y_{\rho} = x^{\rho-1}e^{\alpha x}cos\beta x \cr
\overline{y_1} = e^{\alpha x} \cdot \beta x; y_2 = xe^{\alpha x}cos\beta x; ....; y_{\rho} = x^{\rho-1}e^{\alpha x}cos\beta x 
\end{cases} $ \
Analog pentru orice radacina conjugata multipla a ecuatiei caracteristice.

**Exemple** \
(3):
- a) $ y'' - 2y' + 2y = 0 $; $r_{1,2} = 1 \pm i $;
$ \begin{cases}
y_1 = e^x cos x \cr
y_2 = e^x sin x
\end{cases} $ .
- b) $ y^{(4)} + 2y^{(2)} + 17y'' + 8y' + 4y = 0 $; 
$ \begin{cases}
r_1 = 2i; r_2 = -2i \cr
r_3 = -\frac{1}{4} + i\frac{\sqrt{3}}{4}; r_4 = -\frac{1}{4} - i\frac{\sqrt{3}}{4}
\end{cases} $

(a) $ y^{(4)} - 4y^{(3)} + 8y'' - 8y' + 4y = 0 $; $ y = e^{rx} $ \
$ r^4 - 4r^3 + 8r^2 - 8r + 4 = 0 $ \
$ (r^2 - 2r + 2)^2 = 0 $;
$ \begin{cases}
y_1 = 1 + i -> \text{dubla} \cr
y_2 = 1 - i -> \text{dubla}
\end{cases} $;
$ \begin{cases}
y_1 = e^x cos x \cr
y_2 = e^x sin x 
\end{cases} $;
$ \begin{cases}
y_1 = xe^x cos x \cr
y_2 = xe^x sin x 
\end{cases} $; \
$ y_o = C_1y_1 + C_2y_2 + C_3\overline{y_1} + C_4\overline{y_2} $