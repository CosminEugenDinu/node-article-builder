### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 08.01.2022 

## Ecuatii diferentiale liniare de ordinul n **neomogene**

**Forma generala:** $ A_n(y) = f(x) $, $ f: \hat{I} \to \R $, nenula si continua pe 
$ \hat{I} $ (A_n - operator diferential de integrare).

$ a_0(x) \frac{d^ny}{dx^n} + a_1(x) \frac{d^{n-1}y}{dx^{n-1}} + ... + 
a_{n-1}(x) \frac{dy}{dx} + a_n(x)y = f(x) $

**Teorema 1**

Solutia generala a ecuatiei liniare si neomogene de ordinul n este egala cu suma dintre solutia generala a ecuatiei omogene asociate si o solutie particulara a ecuatiei neomogene.

$ y = y_o + y_p $, $y_o $ = y omogen, $ y_p $ = y particular. 

Pentru $ y_o $ avem nevoie de un sistem fundamental de solutii. Adica de o baza a spatiului vectorial al solutiilor: 

$ B = \\{ y_1, y_2, ..., y_n \\} $, cu proprietatea ca sunt liniar independ =>

$ w(y_1, y_2,..., y_n) \ne 0 $ => 

$ y_o = C_1y1 + C_2y_2 + ... + C_ny_n $ .

Pentru determinarea unei solutii particulare a ecuatiei neomogene se poate utiliza: 
-(a) metoda variatiei constantelor ( a lui Lagrange ) (folosita si la ec de ord 1) = metoda generala (poate fi app in orice ctx, oricare ar fi forma func f(x)), dar este cu atat mai laborioasa cu cat ordinul ecuatiei este mai mare.
-(b) metoda coeficientilor nedeterminati, dar aplicabila daca expresia functiei (termen liber) din membrul drept are cateva forme particulare.
Cea mai generala ar putea fi de forma (polinom):
$ f(x) = Pm(x) e^{\alpha x} cos(\beta x) $

**Prin metoda lui Lagrange** (variatiei constantelor)
- este necesara cunoasterea solutiei generale a ecuatiei omogene asociate

$ y_o = C_1y_1 + C_2y_2 + ... + C_ny_n $

- se presupune ca ct $ C_i $ sunt functii care depind de var indepenta.
- Se pune conditia ca $ y(x) = C_1(x)y_1 + C_2(x)y_2 + ... + C_n(x)y_n $ sa verifice ecuatia neomogena:
$ A_n(x) = f(x) $.

- Se demonstreaza ca derivatele $ C_i'(x) $, $ i = \overline{1,n} $ verifica urmatorul
sistem de ecuatii algebrice:

$ C_1'y_1 + C_2'y_2 + ... + C_n'y_n = 0 $ \
$ C_1'y_1' + C_2'y_2' + ... + C_n'y_n' = 0 $ \
$ ...... $ \
$ C_1'y_1^{(n-2)} + C_2'y_2^{(n-2)} + ... + C_n'y_n^{(n-2)} = 0 $ \
$ C_1'y_1^{(n-1)} + C_2'y_2^{(n-1)} + ... + C_n'y_n^{(n-1)} = \frac{f(x)}{a_0(x)} $ \

Necunoscutele sunt: $ C_1', C_2', ..., C_n' $ . Sistemul este compatibil, unic determinat deoarece determinantul sau $ \Delta $ este wronskianul:
$\Delta = w(y_1, y_2, ..., y_n) \ne 0 $. 

- Se rezolva acest sistem si se obtine: 
$ C_1'(x) = \varphi_1(x) $; $C_2'(x) = \varphi_2(x)$, ..., $ C_n'(x) = \varphi_n(x) $.

- Se integreaza aceste relatii:
$ C_1(x) = \int{\varphi_1(x)}dx + K_2 ... C_n(x)  = \int{\varphi_n(x)}dx + K_n $ => 
$ y = (K_1y_1 + K_2y_2 + ... + K_ny_n) + y_1\int{\varphi_1(x)}dx + 
y_2 \int{\varphi_2(x)}dx + ... + y_n \int{\varphi_n(x)}dx = y_o(x) + y_p(x) $ =>
$ y_p(x) = \sum_{i=1}^n{y_i\int{\varphi_i(x)}dx} $ = solutia particulara a ecuatiei neomogene. 


### **Teorema de existenta si unicitate** a solutiei problemei Cauchy

Fiind data ecuatia diferentiala liniara si neomogena de ordinul n, $A_n(y) = f(x) $ ,
unde $ a_n(x), f(x) : \hat{I} \to \R $, cu i de la 0 la n $ i = \overline{0,n} $, 
sunt continue pe $\hat{I} $ si $ a_0(x) \ne 0 $ pe $ \hat{I} $, 
atunci exista si este unica solutia $ y: \hat{I} \to \R $ a acestei ecuatii
si care satisface conditiile initiale ale lui **Cauchy**:

$ \begin{cases}
y(x_0) = y_0 \cr
y'(x_0) = y_1 \cr
.....  \cr
y^{(n-1)}(x_0) = y_{n-1} 
\end{cases} $
,  unde $ x_0 \in \hat{I} $ , $ y_0, y_1, ..., y_{n-1} $ sunt $n$ numere date.

**Exemplu**
Sa se determine solutia problemei Cauchy pentru ecuatia
$ y'' - 5y' + 6y = 0 $, cu conditiile initiale
$ \begin{cases}
y(0) = 1 \cr
y'(0) = 0 
\end{cases} $

Pentru ecuatia omogena cautam sol de forma:
$ y = e^{rx} $ => $y' = re^{rx} $; $y'' = r^2e^{rx}$ \
$(r^2 - 5r + 6) e^{rx} = 0 | : e^{rx \ne 0} $ =>
$ r^2 - 5r + 6 = 0 $ -> ec caracteristica asociata ecuatiei omogene (ec gr. 2)
$ \Delta = 25 - 24 = 1 $; $r_{1,2} = \frac{5\pm 1}{2} $; 
$ \begin{cases}
r_1 = 2 \cr
r_2 = 3
\end{cases} $
=> $y_1 = e^{2x} $; $ y_2 = e^{3x} $; $ B = \\{e^{2x}, e^{3x} \\} $.
Sol. gen a ec omogene: $ y_o = C_1e^{2x} + C_2e^{3x}$; $y_o' = 2C_1e^{2x} + 3C)2e^{3x} $

Cond init:
$ \begin{cases}
y(0) = C_1 + C_2 = 1 | \cdot (-2) \cr
y'(0) = 2C_1 + 3C_2 = 0
\end{cases} $

$ \begin{cases}
-2C_1 -2C_2 = 1 \cr
2C_1 + 3C_2 = 0
\end{cases} $
=> 
$ \begin{cases}
C_2 = -2 \cr
C_1 = 1 + 2 = 3
\end{cases} $

=> $ y_0 = 3e^{2x} -2e^{3x} $

### Ecuatii diferentiale liniare, omogene si neomogene, cu coeficienti **variabili**

Vom analiza ecuatiile de acest tip care se pot transforma (prin diverse metode) in ecuatii cu coeficienti constanti.

**(1)  Ecuatii de tip Euler**
Forma generala:
$ a_0x^ny^{(n)} + a_1x^{n-1}y^{(n-1)} + ... + a_{n-1}xy' + a_ny = f(x) $, $ x \ne 0 $.

$ y = y_o + y_p $

Problema de baza: aflatrea lui y o $y_o$.

Pentru determinarea solutiei generale a ecuatiei omogene asociate $ y_o $ vom transforma ecuatia omogena ( o ec cu coef variabili) intr-o ecuatie cu coeficienti constanti.

**Metoda 1** Se face schimbare de variabila independenta $ x = e^t $ <=>
$ t = ln(x) $; $ x > 0 $. \
Derivatele lui $ y $ (ca functie necunoscuta) (care in ecuatie sunt calculate in raport cu $x$ - ca variabila independenta, adica $ \frac{dy}{dx} = y' $;
$ \frac{d'y}{dx^2} = y''$;...; $\frac{d^ny}{dx^n} = y^{(n)} $
se for exprima in functie de derivatele lui $y$, iar in raport cu ... variabilei $t$) 

$ y' = \frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = \frac{dy}{dt} \cdot
\frac{1}{\frac{dx}{dt}} = \frac{dy}{dt} \frac{1}{e^t} = \frac{e^{-t}}\cdot \dot{y} $; $ \dot{y} = \frac{dy}{dt} $

$y'' = \frac{d^2y}{dx^2} = \frac{d}{dx} (\frac{dy}{dx}) = \frac{d}{dt}(\frac{dy}{dx}) \cdot \frac{dt}{dx} = \frac{d}{dt}(e^{-t}\dot{y}) \cdot e^{-t} = e^{-t}(-e^{-t} \cdot \dot{y} + e^{-t} \cdot \dot\dot{y}) e^{-t} = e^{-2t}(\dot\dot{y} - \dot{y})

$ y''' = \frac{d^3y}{dx^3} = \frac{d}{dx} (\frac{d^2y}{dx^2}) =
\frac{d}{dt}(\frac{d^2y}{dx^2})\frac{dt}{dx} = 
\frac{d}{dt}[e^{-2t}(\dot3{y} - \dot2{y})]e^{-t} = 
[-2 \cdot e^{-2t}(\dot2{y}-\dot)]
$ 

...

La inlocuire:

$ x y' \to e^t e^{-t} \dot{y} = \dot{y} $ \
$ x^2y'' \to e^{2t} e^{-2t}(\dot2{y} - \dot{y}) = \dot2{y} - \dot{y} $ \
$ x^3y''' ... $

Derivatele cu punct sunt in raport cu t, iar cele cu ' sunt in raport cu x.

In final se obtine o ecuatie cu coeficienti constanti, dar in variabila t.

Dupa rezolvare se revine la variabila initiala prin substitutia inversa: $ t = ln(x) $.

**Metoda a doua**
$ x = e^t $
Se cauta **solutii** de forma $ y = x^r $. Derivam:

$ y' = r x^{r-1}$; $y'' = r(r-1)x^{r-2} $; $y''' = r(r-1)(r-2)x^{r-3} $; ...

Dupa inlocuire se obtine:

$ x^r [ a_0 r(r-1)(r-2)...(r - n + 1) + a_1 r(r-1)... + a_{n-1}r + a_n] = 0 $

[...] = ecuatia caracteristica.

**Exemplu**

$ x^2 y'' - xy' - 3y = 0 $ -> ecuatie de tip Euler

Rezolvare prin **metoda a doua**. Cautam solutii de forma: $ y = x^r $. 

=> $ y' = r x^{r-1} $; $ y'' = r(r-1) x^{r-2} $:

$ x^2 r(r-1) x^{r-2} - x^r r x^{r-1} - 3 x^r = 0 $.

$ x^r[r(r-1) - r - 3] = 0 $ => $ r^2 - r - r - 3 = 0 $;

$ r^2 - 2r - 3 = 0 $

$ \Delta = 4 + 12 = 16 $ => $r_{1,2} = \frac{2 \pm 4}{2} $

Pentru $ r_1 = 3 $ => $ y_1 = x^3 $

$ r_2 = -1 $ => $ y_2 = \frac{1}{x} $

=> $ y_o = C_1x^3 + C_2 \frac{1}{x} $


**Exemplu** 2

$ x^3 y''' - x^2 y'' + 2xy' - 2y = 0 $

Se cere solutia generala.

Cautam solutii de forma: $ y = x^r $.

$ y' = r x^{r-1} $; $ y'' = r(r-1) x^{r-2} $; $y''' = r(r-1)(r-2) x^{r-3} $

$ x^3 x^{r-3} r(r-1)(r-2) - x^2 x^{r-2} r(r-1) + 2x r x^{r-1} - 2x^r = 0 $

$ x^r [ r(r-1)(r-2) - r(r-1) + 2r - 2 ] = 0 $

Ec carac:

$ (r-1)(r^2 - 2r - r + 2) = 0 $

$ (r-1)(r^2 - 3r + 2) = 0

$ (r-1)(r-1)(r-2) = 0 $ 

$ (r-1)^2(r-2) = 0 $  =>

$ r_1 = r_2 = 1 $; $ r_3 = 2 $.

$ r^3 - 4r^2 + 5r - 2 = 0 $ <= $ (r-1)(r^2 - 3r + 2) = 0 $

$ x = e^t $ 

$ \dot{\ddot{y}} - 4 \ddot{y} + 5 \dot{y} - 2y = 0 $

$ y = e^{rt} = (e^{t})^r = x^r $

$ r_1 = r_2 = 1 $ -> $ y_1 = e^t $; $ y_2 = t e^t $

$ r_3 = 2 $ -> $ y_3 = e^{2t} $

$ y_1 = x$; $y_2 = x ln(x) $; $y_3 = x^2 $

=> Sol ec. init va fi: $ y(x) = C_1x + C_2 x ln(x) + C_3 x^2 $


**Principiul superpozitiei** (suprapunerii efectelor)

Presupunem ca avem o ecuatie neomogena de forma: 
$ A_n(y) = f_1(x) + f_2(x) + ... + f_k(x) $.
- Se determina cate o solutie particulara pentru fiecare ecuatie neomogena, astfel:

$ A_n(y) = f_1(x) $ -> sol. particulara $ y_{p_1}(x) $

$ A_n(y) = f_2(x) $ -> sol. particulara $ y_{p_2}(x) $

$...$

$ A_n(y) = f_k(x) $ -> sol. particulara $ y_{p_k}(x) $

-> Prin metoda variatiei constantelor sau prin meotda coeficientilor nedeterminati.

In final => ca sol. particulara a ecuatiei initiale este suma tuturor solutiilor particulare anterioare. 

$ y_p(x) = y_{p_1}(x) + y_{p_2}(x) + ... + y_{p_k}(x) $


### Sisteme de ecuatii diferentiale de ordinul 1. Sisteme liniare

**Definitie** Se numeste sistem de ecuatii diferentiale de ordinul **1**, liniar si neomogen, un sistem de forma (1): 

$ \frac{dy_1}{dx} = a_{11}(x)y_1 + a_{12}(x)y_2 + ... + a_{1n}(x)y_n + f_1(x) $

$ \frac{dy_2}{dx} = a_{21}(x)y_1 + a_{22}(x)y_2 + ... + a_{2n}(x)y_n + f_2(x) $

$... $

$ \frac{dy_n}{dx} = a_{n1}(x)y_1 + a_{n2}(x)y_2 + ... + a_{nn}(x)y_n + f_n(x) $

unde $ a_{ij}, f_i : \hat{I} \to \R$, $ i, j = \overline{1,n} $ sunt functii 
continue pe intervalul \hat{I}. $ y_1, y_2, ..., y_n $ sunt functiile 
necunoscute, derivabile pe $\hat{I} $ cu derivata continua.

Sistemul se numeste **liniar** pentru ca toate funciile necunoscute si derivabilele lor
sunt la puterea intaia in ecuatii.

Sistemul este **neomogen** pentru ca cel putin una din functiile $ f_1, f_2, ..., f_n $ este nenula. 

**Notatii** Fie
$ y = (
  y_1
  y_2
  ...
  y_n
)
$ 

$ 
A = (a_{ij}(x))_{1 \le i, j \le n }
$ ; 
$ F(x) = (
  f_1(x)
  f_2(x)
  ...
  f_n(x)
)
$

Cu aceste notatii sistemul se scrie astfel:

(2) $ \frac{dY}{dx} = A(x)y + F(x) $ -> forma matriceala a sistemului.

(3) $ \frac{dY}{dx} = A(x)y $ -> n.n. sistemul omogen asociat sistemului (2).

O solutie a sistemului (1) sau (2) pe intervalui $ \hat{I} $ este un vector format din $ n $ functii de clasa $ C^1 $ pe $ \hat{I} $, 
care verifica sistemul in orice punct $ x \in \hat{I} $. 

**Teorema 1**
Solutia generala a sistemului neomogen (2) este suma dintre solutia generala a sistemului omogen (3) si o solutie particulara a sistemului neomogen (2):

$ Y(x) = Y_o(x) + Y_p(x) $

$ Y_o $ sol gen a sist omogen asociat (3)

$ Y_p $ o sol particulara a sistemului neomogen 

**Teorema 1**
Fie sistemul (3) omogen asociat sistemului (1) sau (2). Multimea solutiilor sistemului omogen (3) este un subspatiu vectorial finit dimensional al spatiului real infinit dimensional $ C^1(\hat{I}) $. \
Dimensiunea acestui subspatiu este egala cu numarul ecuatiilor sistemului, adica este egala cu $ n $.\
O baza a acestui subspatiu este formata din $ n $ solutii liniar independente ale sistemului omogen (3).

$ Y_1 = (
  y_{11}
  y_{21}
  ...
  y_{n1}
)
$ 
$ 
Y_2 = (
  y_{12}
  y_{22}
  ...
  y_{n2}
)
$
$, ...., $
$
Y_n = (
  y_{1n}
  y_{2n}
  ...
  y_{nn}
)
$
$ n$ solutii liniar indep ale sist. omogen $ \frac{dY}{dx} = A(x)Y$

Orice solutie a sistemului omogen (3) $\frac{dY}{dx} = A(x)Y$  poate fi exprimata ca 
o combinatie liniara cu coeficienti constante arbitrare ale solutiilor de baza:

$ B = \\{ Y_1, Y_2, ..., Y_n \\} $

Atunci orice sol $Y_o $ va fi de forma:

$ Y_o = C_1Y_1 + C_2 Y_2 + ... + C_n Y_n = (Y_1, Y_2, ..., Y_n) \cdot
(
  C_1
  C_2
  ...
  C_n
)
$

Prin particularizarea constantelor $ C_1, ..., C_n $ se poate obtine orice solutie a sistemului.

O solutie de tip Cauchy se obtine aplicand conditii initiale de tip Cauchy:

$ y_1(x_0) = y_{10} $ \
$ y_2(x_0) = y_{20} $ \
$ ... $\
$ y_n(x_0) = y_{n0} $ \

$ x_0 \in \hat{I} $ , $ y_{k,0} $, $ k = \overline{1,n} $ sunt $ n $ numere date.

**Definitie**
$ n $ solutii $ Y_1, Y_2, ..., Y_n $ ale sistemului omogen $ \frac{dY}{dx} = A(x)Y $ sunt liniar independente pe $ \hat{I} $ daca determinantul matricei celor $ n $
solutii este nenul pe $ I $. 

$ det(Y_1, Y_2, ..., Y_n) \ne 0 $ , $ \forall x \in \hat{I} $

Atunci aceasta matrice, notata $ \Delta(x) $, 

$ \Delta(x) = 
\begin{bmatrix}
y_{11} & y{12} & ... & y_{1n} \cr
y_{21} & y{22} & ... & y_{2n} \cr
.... \cr
y_{n1} & y{n2} & ... & y_{nn} \cr
\end{bmatrix} $ n.n. matrice fundamentala de solutii a sistemului omogen.

Sol. gen. a sist. omogen, pe componenete, se va scrie astfel:

$ Y = 
\begin{bmatrix}
y_1 \cr
y_2 \cr
... \cr
y_n
\end{bmatrix}
=
\begin{bmatrix}
y_{11} & y{12} & ... & y_{1n} \cr
y_{21} & y{22} & ... & y_{2n} \cr
...& ... & ... & ... \cr
y_{n1} & y{n2} & ... & y_{nn} \cr
\end{bmatrix}
\cdot 
\begin{bmatrix}
C_1 \cr
C_2 \cr
... \cr
C_n
\end{bmatrix}
$ 
$ =
\begin{bmatrix}
y_{11}C_1 + y_{12} C_2 + ... + y_{1n}C_n \cr
y_{21}C_1 + y_{22} C_2 + ... + y_{2n}C_n \cr
... \cr
y_{n1}C_1 + y_{n2} C_2 + ... + y_{nn}C_n \cr
\end{bmatrix} $

**Teorema** Matricea fundamentala de solutii a sistemului omogen, 
$ W(x) = (Y_1(x), Y_2(x), ..., Y_n(x)) $ satisface ecuatia diferentiala matriceala  
urmatoare:

$\frac{dW}{dx} = A(x)W(x) $

Intradevar: $ \frac{dW}{dx} = ( \frac{dY_1}{dx}, \frac{dY_2}{dx}, ..., \frac{dY_n}dx) $

$ A(x) \cdot W(x) = A(x) \cdot (Y_1, Y_2, ..., Y_n) = $(A(x)Y, A(x)Y_2, ..., A(x)Y_n) $ <=>

$ \frac{dY_1}{dx} = A(x)Y_1, ..., \frac{dY_n}{dx} = A(x) Y_n $. Toare relatiile sunt adevarate deoarece $ Y_1, Y_2, ..., Y_n $ sunt toate solutii ale sistemului omogen.

**Exemplu**
Fie sistemul de 2 ec cu 2 func necunoscute:
$ \begin{cases}
(1 -xe^x)\frac{dy_1}{dx} = -e^x y_1 + y_2 \cr
(1 - xe^x) \frac{dy_2}{dx} = e^x y_1 - xe^x y_2 
\end{cases} $ sist liniar omogen de 2 ec cu 2 functii necunoscute de ordinul **1**.
, $ 1-xe^x \ne 0 $

Impartim la $ 1-xe^x $ =>
$ \begin{cases}
\frac{dy_1}{dx} = - \frac{e^x}{1-xe^x} \cdot y_1 + \frac{1}{1-xe^x} \cdot y_2 \cr
\frac{dy_2}{dx} = - \frac{e^x}{1-xe^x} \cdot y_1 + \frac{1}{1-xe^x} \cdot y_2 \cr
\end{cases} $ 
(forma normala a sistemului )

Un sistem fundamental de solutii pt acest sitem este urmatorul:

$ Y_1 = 
\begin{bmatrix}
y_{11} \cr
y_{21}
\end{bmatrix}
=
\begin{bmatrix}
1 \cr
e^x
\end{bmatrix}
$

$ Y_2 = 
\begin{bmatrix}
  y_{21} \cr
  y_{22}
\end{bmatrix}
= 
\begin{bmatrix}
x \cr
1
\end{bmatrix}
$

Verificare exercitiu - prin calcul direct. 

$ det(W(x)) =
det
\begin{bmatrix}
1 & x \cr
e^x & 1 
\end{bmatrix}
= 1 - xe^x \ne 0 
$

Sol gen a sist:

$
y =
\begin{bmatrix}
  y_1 \cr
  y_2
\end{bmatrix}
= 
\begin{bmatrix}
Y_1 & Y_2
\end{bmatrix}
\cdot
\begin{bmatrix}
  C_1 \cr
  C_2
\end{bmatrix}
= 
\begin{bmatrix}
1 & x \cr
e^x & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
  C_1 \cr
  C_2
\end{bmatrix}
= 
\begin{bmatrix}
C_1 + xC_2 \cr
C_1e^x + C_2
\end{bmatrix}
$

$ \begin{cases}
y_1 = C_1 + xC_2 \cr
y_2 = C_1e^x + C_2
\end{cases} $


### Sisteme neomogene
### Metoda variatie constantelor

**Teorema** Solutia generala a sistemului oliniar neomogen de $ n $ ecuatii cu $ n $
necunoscute este egala cu suma dintre solutia generala a sistemului omogen asociat
si o solutie particulara a sistemului neomogen.

Daca se cunoaste solutia generala a sistemului omogen asociat, atunci o solutie
particulara a sistemului neomogen se poate determina prin metoda variatiei constantelor.

Fie $ W(x) = [Y_1, Y_2, ..., Y_n] $ = matricea fundamentala de solutii a sistemului
omogen. $ det(W(x)) \ne 0 $. \
Fie $ Y_o = W(x)C $, unde 
$ C = (C_1, C_2, ..., C_n)^t$ (vector coloana transpus). Presupunem ca $C_i$ nu sunt
constante ci functii de x $ C = C(x) $ => Fiecare $C_i = C_i(x) $, $i = \overline{1,n}$ .

$ Y_o = W(x)C(x) $

Punem conditia ca $ Y_o $ sa verifica sistemul neomogen:

$ \frac{dY_o}{dx} = \frac{d}{dx} (W(x) \cdot C(x)) $

$ \frac{dW(x)}{dx} \cdot C(x) + W(x) \frac{dC(x)}{dx} $

=> $ \frac{dW}{dx} \cdot C(x) + W(x) \cdot \frac{dC(x)}{dx} = A(x) \cdot W(x) \cdot C(x) + F(x) $

$ \underbrace{(\frac{dW(x)}{dx} - A(x)W(x))}_{\text{nula}} \cdot C(x) + W(x) \cdot \frac{dC(x)}{dx} = F(x) $

$ W(x) \cdot \frac{dC(x)}{dx} = F(x) $ -> ecuatie matriceala.

$ W $ inversabila. Inmultim la stanga cu $ W^{-1}(x) =>

$ W^{-1}(x) \cdot W(x) \cdot \frac{dC(x)}{dx} = W^{-1}(x) \cdot F(x) $

$ \frac{dC(x)}{dx} = W^{-1}(x) \cdot F(x) $  ($(n,n)\cdot(n,1) = (n,1)$)

$ C(x) = \int{W^{-1}(x)\cdot F(x)}dx + K $,
$ K =
\begin{bmatrix}
K1 \cr
K_2 \cr
... \cr
K_n
\end{bmatrix}
$

=> $ Y(x) = W(x) \cdot C(x) $;
$ Y(x) = W(x) [K + \int{W^{-1}(x)F(x)}dx] $

$ Y(x) = W(x)K + W(x) \int{W^{-1}(x)F(x)}dx $

$ W(x)K = Y_o $


$ W(x) \int{W^{-1}(x)F(x)}dx = Y_p $


**Exemplu**

$
\begin{cases}
y_1' = -\frac{e^x}{1 - xe^x} y_1 + \frac{1}{1 - xe^x } y_2 + 1 \cr
y_2' = \frac{e^x}{1 - xe^x} y_1 - \frac{xe^x}{1 - xe^x} y_2 + e^x
\end{cases}
$

$ F(x) = 
\begin{bmatrix}
1 \cr
e^x
\end{bmatrix} $

$ W(x) = (y_1, y_2) = 
\begin{bmatrix}
1 & y \cr
2^x & 1 
\end{bmatrix} $ ; 

$ det(W(x)) = 1 - xe^x \ne 0 $ <=>

Se calculeaza 
$ W^{-1}(x) = \frac{1}{1-xe^x} \cdot
\begin{bmatrix}
1 & -x \cr
-e^x & 1
\end{bmatrix} $

Sub integrala: $ W^{-1} \cdot F(x) = \frac{1}{1-xe^x} \cdot
\begin{bmatrix}
1 &  -x \cr
-e^x & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
1 \cr
e^x
\end{bmatrix}
$
=
$ \int{W^{-1}(x)F(x)}dx = 
\begin{bmatrix}
\int{1}dx \cr
\int{0}dx
\end{bmatrix} $
$ = \begin{bmatrix}
x \cr
0
\end{bmatrix}
$

$ Y(x) = W(x) [K + \int{W^{-1}(x)F(x)}dx] = 
\begin{bmatrix}
1 & x \cr
e^x & 1
\end{bmatrix} \cdot
\begin{bmatrix}
K_1 \cr
K_2
\end{bmatrix} + 
\begin{bmatrix}
x \cr
2
\end{bmatrix}
] $

$ \begin{bmatrix}
y_1 \cr
y_2
\end{bmatrix} = 
\begin{bmatrix}
....
\end{bmatrix}
$

$ Y_o = \begin{bmatrix}
K_1 + K_2x \cr
K_1e^x + K_2
\end{bmatrix} $

$ Y_p = \begin{bmatrix}
x \cr
xe^x
\end{bmatrix}
$

Sa se determine si solutie problemei Cauchy:

$ \begin{cases}
y_1(0) = 0 \cr
y_2(1) = 1
\end{cases} $;

$\begin{cases}
y_1(x) = K_1 + K_2x + x \cr
y_2(x) = K_2e^x + K_2 + xe^x
\end{cases} $
=> 
$ \begin{cases}
k_1 = 0 \cr
K_1 + K_2 = 1
\end{cases} $
=>
$ \begin{cases}
K_1 = 0 \cr
K_2 = 1
\end{cases} $ =>
$ \begin{bmatrix}
y_1 \cr
y_2
\end{bmatrix} = 
\begin{bmatrix}
2x \cr
1 + xe^x
\end{bmatrix}
$

### Constructia unui sistem de ecuatii diferentiale de sistem fundamental dat de **n** ecuatii cu **n** necunoscute

Stim ca multimea solutiilor unui astfel de sistem este un spatiu vectorial **n**-dimensional, o baza a sa fiind formata din **n** solutii liniar independente.
Rezulta ca $ (n + 1) $ solutii vor fi liniar dependente.
 Presupunem ca se da baza spatiului solutiilor prin matricea fundamentala de solutii.

$
 W(x) = (Y_1, Y_2, ..., Y_n) = 
\begin{bmatrix}
 y_{11} & y_{12} & ... & y_{1n} \cr
 y_{21} & y_{22} & ... & y_{2n} \cr
 ... & ... & ... & ... \cr
 y_{n1} & y_{n2} & ... & y_{nn} \cr
\end{bmatrix}
$ 

$ det(W(x)) = $

Fie
$ y = 
\begin{bmatrix}
y_1 \cr
y_2 \cr
... \cr
y_n
\end{bmatrix}
$
s solutie, $ a - n + 1 $ - solutie . Rezulta ca sistemul de ecuatii dif cautat este urmatorul:

$
\begin{vmatrix}
\frac{dy_k}{dx} & \frac{dy_{k_1}}{dx} & \frac{}{} & ... & \frac{dy_{k_n}}{dx} \cr
y_1 & y_{11} & y_{12} & ... & y_{1n} \cr
y_2 & y_{21} & y_{22} & ... & y_{1n} \cr
... & ... & ... & ... & ... \cr
y_{n} & y_{n1} & y_{n2} & ... & y_{nn}
\end{vmatrix}
$

**Exemplu**
Sa se formeze sist omogen de 2 ec dif dec care admite urmatorus sitem fundamental de solutii:

$ Y_1 = 
\begin{bmatrix}
cos(2x) \cr
-sin(2x)
\end{bmatrix}
$
$ Y_2 = 
\begin{bmatrix}
sin(2x) \cr
cos(2x)
\end{bmatrix}
$

=>
$ det W(x) = det
\begin{bmatrix}
cos2x & sin2x \cr
-sin2x & cos2x
\end{bmatrix}
$ 
=
$ cos^22x + sin^22x = 1$, $ \forall x \in \R $.

Pt $ k = 1 $

$ \begin{vmatrix}
y_1' & - 2sin2x & 2 cos2x \cr
y_1 & cos2x & sin2x \cr
y_2 & - sin2x & cos2x
\end{vmatrix} = 0 $
<=> $ y_1' = 2y_2 $

Pt $ k = 2 $:

$
\begin{vmatrix}
y_2' & - 2cos2x & - 2sin2x \cr
y_1 & cos(2x) & sin2x \cr
y_2 & -sin2x & cos2x
\end{vmatrix}
= 0 $ 

=> $ y_2' = -2y_1 $

$
\begin{bmatrix}
\frac{dy_1}{dx} \cr
\frac{dy_2}{dx}
\end{bmatrix}
=
\begin{bmatrix}
0 & 2 \cr
-2 & 0 
\end{bmatrix}
\cdot
\begin{bmatrix}
y_1 \cr
y_2
\end{bmatrix}
$


