### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 09.01.2022 

## Aplicatii la sisteme de ecuatii diferentiale liniare, omogene, de ordinul 1 cu coeficienti constanti 

**Forma generala** 
$
\begin{cases}
\frac{dy_1}{dx} = a_{11}y_1 + a_{12}y_2 + ... + a_{1n}y_n \cr
\frac{dy_2}{dx} = a_{21}y_1 + a_{n2}y_2 + ... + a_{2n}y_n \cr
... \cr
\frac{dy_n}{dx} = a_{n1}y_1 + a_{n2}y_2 + ... + a_{nn}y_n \cr
\end{cases} $
<=> 
$ \frac{dY}{dx} = A\cdot Y $

Pentru un astfel de sistem se poate determina intotdeauna un sistem fundamental de solutii , deci solutia sa generala.

Se cauta solutii de forma:
$ Y =
\begin{bmatrix}
A_1 \cr
A_2 \cr
... \cr
A_n
\end{bmatrix}
\cdot e^{rx}
$,
$ (A_i)_{i=1,n} $ sunt constante care se vor determina.

$ \frac{dY}{dx} = 
\begin{bmatrix}
A_1 r \cr
A_2 r \cr
... \cr
A_n r 
\end{bmatrix} 
\cdot e^{rx}
$

Inlocuind in sistem se va obtine:

$ \begin{bmatrix}
A_1 r \cr
A_2 r \cr
... \cr
A_n r 
\end{bmatrix} 
\cdot e^{rx}
=
\begin{bmatrix}
a_{11} & a_{12} & ... & a_{1n} \cr
a_{21} & a_{22} & ... & a_{2n} \cr
... & ... & ... & ... \cr
a_{n1} & a_{n2} & ... & a_{nn}
\end{bmatrix}
\cdot
\begin{bmatrix}
A_1 \cr
A_2 \cr
... \cr
A_n
\end{bmatrix}
\cdot e^{rx}
$
$
\begin{cases}
A_1 r = a_{11} A_1 + a_{12}A_2 + ... + a_{1n} A_n \cr
A_2 r = a_{21} A_1 + a_{22} A_2 + ... + a_{2n} An \cr
.... \cr
A_n r = a_{n1} A_1 + a_{n2} A_2 + ... + a_{nn} An
\end{cases}
$
$
\begin{cases}
(a_{11} r)A_1 + a_{12}A_2 + ... + a_{1n}A_n = 0 \cr
a_{21} A_1 + 
\end{cases}
$

Am obtinut un sistem algebric omogen de $n$ ecuatii cu $n$ necunoscute.
Acest sistem admite intotdeauna solutia **nula** (se mai numeste solutia banala).

$ A_1 = A_2 = ... = A_n = 0 $ => $ Y = 0_{n,1} $

Acest sistem admite si solutii nenule <=> (daca si numai daca) determinantul matricei sistemului este nul. 

$
\Delta(r) =
\begin{vmatrix}
a_{11} - r & a_{12} & a_{13} & ... & a_{1n} \cr
a_{21} & a_{22} - 4 & a_{23} & ... & a_{2n} \cr
... & ... & ... & ... & ... \cr
a_{n1} & a_{n2} & a_{n3} & ... & a_{nn} - 4
\end{vmatrix}
= 0
$
<=> 
$
det(A - rI_n) = 0
$ <=>
**polinomul caracteristic al matricei A** <=> radacinile $(r_i), i=1,n$ sunt tocmai
valorile proprii ale matricei $A$ . (Fiecarei valori proprii ii corespunde un vector propriu) =>
$ A_1, A_2, ..., A_n $ sunt coordonatele vectorului propriu al unei valori proprii a matricei $ A $. 

**Algoritmul de rezolvare**
- (1) Se calculeaza polinomul caracteristic al matricei $ A $ a coeficientilor sistemului:
$ \varphi_A(r) = det(A - rI_n) = 0 $
- (2) Se determina radacinile polinomului caracteristic, deci valorile proprii ale matricei $ A $.
- (3) Pentru fiecare valoare proprie se determina coordonatele vectorului propriu corespunzator.
$ r_1 $ -> 
$
\begin{bmatrix}
A_n \cr
A_{21} \cr
... \cr
A_{n1}
\end{bmatrix}
$; 
$ Y_1 = 
\begin{bmatrix}
A_{11} \cr
A_{21} \cr
... \cr
A_{n1} 
\end{bmatrix}
\cdot e^{r_1 x}
$ ...

$ r_n $ -> 
$
\begin{bmatrix}
A_{1n} \cr
A_{2n} \cr
... \cr
A_{nn}
\end{bmatrix}
$; 
$ Y_n = 
\begin{bmatrix}
A_{1n} \cr
A_{2n} \cr
... \cr
A_{nn} 
\end{bmatrix}
\cdot e^{r_n x}
$ ...

Solutia generala a sistemului va fi:

$ Y = 
\begin{bmatrix}
y_1 \cr
y_2 \cr
... \cr
y_n
\end{bmatrix}
=
\begin{bmatrix}
Y_1 & y_2 & ... & Y_n
\end{bmatrix}
\cdot
\begin{bmatrix}
C_1 \cr
C_2 \cr
... \cr
C_n
\end{bmatrix}
$

**Cazuri posibile** Pot aparea urmatoarele situatii:
- (a) Valorile proprii sunt reale si distincte ale matricei $A$ a coeficientilor sistemului.
- (b) Exista valori proprii reale si multiple
- (c) Exista valori proprii complex conjugate simple
- (d) Exista valori proprii complex conjugate multiple.

**Cazul (b)** Presupunem ca $ r = r_i $ este valoare proprie multipla de ordinul $p$, $ p > 1 $.
Se vor cauta solutii prin metoda coeficientilor nedeterminati, de forma:

$
Y_i = 
\begin{bmatrix}
P_1(x) \cr
P_2(x) \cr
... \cr 
P_n(x)
\end{bmatrix}
\cdot  e^{r_1 x}
$, 
unde polinoamele $ P_k(x) $, $ k = \overline{1,n} $ au gradul $ p-1 $ si coeficientii nedeterminati.
Punand conditia ca $ Y_i $ de aceasta forma sa verifice sistemul omogen de ecuatii
diferentiale, se vor face identificarile astfel incat sa ramana in final numai
$ p $ (p - ordinul de multiplicitale al radacinii proprii) constante arbitrare in 
exprimarea solutiei finale. Solutia $ Y_1 $ care corespunde valorii proprii
$ r_i $, multipla de ordinul $ p $ , va arata astfel:

$ Y_i(x) = 
\begin{bmatrix}
\alpha_{11} \cr
\alpha_{21} \cr
... \cr
\alpha_{n1}
\end{bmatrix}
\cdot A_1 \cdot e^{r_i x} +
\begin{bmatrix}
\alpha_{12} \cr
\alpha_{22} \cr
... \cr
\alpha_{n2}
\end{bmatrix}
\cdot A_2 \cdot x \cdot e^{r_i x} + ... +
\begin{bmatrix}
\alpha_{1p} \cr
\alpha_{2p} \cr
... \cr
\alpha_{np}
\end{bmatrix}
\cdot A_p \cdot x^{p-1} \cdot e^{r_i x} 
$

$ A_1...$

**Cazul (c)** Daca $ r_1 = \alpha + i\beta $ si $ r_2 = \alpha - i\beta $, lor
le vor corespunde $ Y_1 $ si $ Y_2 $ solutii cu coeficienti complecsi in sistemul
fundamental. Se recomanda ca in loc de $ Y_1 $ si $ Y_2 $ sa se utilizeze solutiile
$ \overline{Y_1} = \frac{Y_1 + Y_2}{2} $ si $ \overline{Y_2} = \frac{Y_1 - Y_2}{2i} $ ,
care au toate coordonatele numere reale.

**Cazul (d)** Daca radacinile complex conjugate sunt multiple, se va proceda ca in
cazul radacinilor reale si multiple.

**Exemple**

(1) Sa se determine solutia generala a sistemului:
$
\begin{cases}
\frac{dy}{dx} = y + 4z \cr
\frac{dz}{dx} = y + z
\end{cases}
$, $ y $ si $ z $ sunt funciile necunoscute \
$ x $ = variabilela independenta \
sistemul are coeficienti constanti \
$
\begin{bmatrix}
\frac{dy}{dx} \cr
\frac{dz}{dx}
\end{bmatrix}
=
\begin{bmatrix}
1 & 4 \cr
1 & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
y \cr
z
\end{bmatrix}
$
Vom cauta solutii de forma:
$ Y = 
\begin{bmatrix}
y \cr
z
\end{bmatrix}
\cdot e^{rx}
=
\begin{bmatrix}
A_1 e^{rx} \cr
A_2 e^{rx}
\end{bmatrix}
$

$
\frac{dy}{dx} =
\begin{bmatrix}
A_1 r e^{rx} \cr
A_2 r e^{rx}
\end{bmatrix}
= 
\begin{bmatrix}
A_1r \cr
A_2 r 
\end{bmatrix}
$

Sistemul devine:

$
\begin{bmatrix}
A_1 r \cr
A_2 r
\end{bmatrix}
\cdot 
\begin{bmatrix}
e^{rx} \cr
\end{bmatrix}
=
\begin{bmatrix}
1 & 4 \cr
1 & 1 
\end{bmatrix}
\cdot
\begin{bmatrix}
A_1 \cr
A_2
\end{bmatrix}
\cdot e^{rx}
| : e^{rx (\ne 0)}
$

$
\begin{bmatrix}
A_1 r \cr
A_2 r
\end{bmatrix}
= 
\begin{bmatrix}
A_1 + 4A_2 \cr
A_1 + A_2
\end{bmatrix}
$
<=>
$
\begin{cases}
A_1 r = A_1 + 4A_2 \cr
A_2 r = A_1 + A_2
\end{cases}
$

$
\begin{cases}
(1 - r) A_1 + 4A_2 = 0 \cr
A_1 + (1-4)A_2 = 0
\end{cases}
$ 
<=>
$ 
\begin{cases}
\begin{bmatrix}
1-r & 4 \cr
1 & 1-r
\end{bmatrix}
\cdot
\begin{bmatrix}
A_1 \cr
A_2
\end{bmatrix}
=
\begin{bmatrix}
0 \cr
0
\end{bmatrix}
\end{cases}
$

-> Sistem omogen de 2 ecuatii cu 2 necunoscute ... admite si solutii nenule <=>
$ det(A - rI_2) = 0 $

$ (1-r)^2 - 4 = 0 $;
$ (1 - r - 2)(1 - r + 2) = 0 $;
$ (-1 -r)(3 - r) = 0 $ =>
$ r_1 = -1 $ si $ r_2 = 3 $ -> reale si distincte!

Calculul ... proprii:

$ r_1 = -1 $
$
\begin{cases}
(1 - r)A_1 + 4A_2 = 0 \cr
A_1 + (1 - r)A_2 = 0
\end{cases}
$ =>
$
\begin{cases}
2A_1 + 4A_2 = 0 | : 2 \cr
A_1 + 2A_2 = 0
\end{cases}
$ => 
$ A_1 + 2A_2 = 0$ ;
$ A_1 = -2A_2$; 
$ V_1 = 
\begin{bmatrix}
A_1 \cr
A_2
\end{bmatrix}
=
\begin{bmatrix}
-2A_2 \cr
A_2
\end{bmatrix}
=
\begin{bmatrix}
-2 \cr
1
\end{bmatrix}
$

$ V_1 = 
\begin{bmatrix}
-2 \cr
1
\end{bmatrix}
$ =>
$ Y_1 = 
\begin{bmatrix}
-2 \cr
1
\end{bmatrix}
\cdot e^{-x}
$

$ r = 3 $ =>
$
\begin{cases}
-2A_1 + 4A_2 = 0 | : (-2) \cr
A_1 - 2A_2 = 0
\end{cases}
$ =>
$ A_1 -2A_2 = 0 $; 
$ A_1 = 2A_2$

$ V_2 = 
\begin{bmatrix}
A_1 \cr
A_2
\end{bmatrix}
= 
\begin{bmatrix}
2A_2 \cr
A_2
\end{bmatrix}
= 
\begin{bmatrix}
2 \cr
1
\end{bmatrix}
\cdot 
A_2
$ => 
$ Y_2 = 
\begin{bmatrix}
2 \cr
1 
\end{bmatrix}
\cdot e^{3x}
$

$ 
\Delta(x) = 
\begin{bmatrix}
Y_1 & Y_2
\end{bmatrix} 
=
\begin{bmatrix}
-2 e^{-x} & 2 e^{3x} \cr
e^{-x} & e^{3x} 
\end{bmatrix}
$

$ Y = 
\begin{bmatrix}
y \cr
z
\end{bmatrix}
= 
\Delta(x) \cdot
\begin{bmatrix}
C_1 \cr
C_2
\end{bmatrix}
$ ....

...

$ 
Y = 
\begin{bmatrix}
y \cr
z
\end{bmatrix}
= 
\begin{bmatrix}
-2e^{-x} & 2e^{3x} \cr
e^{-x} & e^{3x}
\end{bmatrix}
\cdot 
\begin{bmatrix}
C_1 \cr
C_2
\end{bmatrix}
= 
\begin{bmatrix}
-2C_1e^{-x} + 2C_2e^{3x} \cr
C_1e^{-x} + C_2e^{3x} 
\end{bmatrix}
$ =>

$ \begin{cases}
y = -2C_1e^{-x} + 2C_2e^{3x} \cr
z = C_1e^{-x} + C_2e^{3x}
\end{cases}
$ = solutia generala a sistemului .

**Problema de tip Cauchy** Pentru sistemul dat sa se determine solutia care verifica 
urmatoarele conditii initiale:
$ y(0) = 5 $; $ z(0) = 3 $

$
\begin{cases}
y(0) = -2C_1 + 2C_2 = 5 \cr
z(0) = C_1 + C_2 = 3
\end{cases}
$;
$
\begin{cases}
-2C_1 + 2C_2 = 5 \cr
-2C_1 + 2C_2 = 6
\end{cases}
$

=> 
$ 4C_2 = 12 $ => $ C_2 = 3$;
$ C_1 = 0 $ => 
$
\begin{cases}
y(x) = 6e^{3x} \cr
z(x) = 3e^{3x}
\end{cases}
$

**Observatie** Se poate demonstra ca in general coordonatele vectorului propriu
pentru o valoare proprie $ r $ a matricei $ A $ a coeficientilor
sunt proportionale cu complementii algebrici ai elementelor din prima linie
a matricei $ A - rI_n $.

$ \frac{A_1}{\Gamma_{11}(r)} = \frac{A_2}{\Gamma_{12}(r)} = ... = \frac{A_n}{\Gamma_{1n}(r)} $,
unde $ \Gamma_{1j}$, $j =\overline{1,n} $ sunt complementii algebrici ai elementelor din prima linia a matricei $ A - rI_n$.

$ A - rI_2 = 
\begin{bmatrix}
1-r & 4 \cr
1 & 1-r
\end{bmatrix}
$

$ \Gamma_{11} = (-1)^{1+1} \cdot (1 - r) = 1 - r$ \
$ \Gamma_{12} = (-1)^{1+2} \cdot 1 = - 1$

$\frac{A_1}{1-r} = \frac{A_2}{-1} $

..... tabel .....

=> 
$ Y_1 =
\begin{bmatrix}
2 \cr
-1
\end{bmatrix}
\cdot e^{-x}
$;
$ Y_2 = 
\begin{bmatrix}
-2 \cr
-1
\end{bmatrix}
\cdot e^{3x}
$
= baza spatiului vectorial as solutiilor. Solutia generala a sistemului:

$ Y = 
\begin{bmatrix}
y \cr
z
\end{bmatrix}
=
\begin{bmatrix}
2e^{-x} & -2e^{3x} \cr
-e^{-x} & -e^{3x}
\end{bmatrix}
\cdot
\begin{bmatrix}
C_1 \cr
C_2
\end{bmatrix}
=
\begin{bmatrix}
2C_1e^{-x} - 2C_2e^{3x} \cr
-C_1e^{-x} - C_2e^{3x}
\end{bmatrix}
$

<!-- **Obs** Semn diferit fata de rezolvarea anterioara - putem considera ca este inglobat in constanta. -->


**Exemplul 2**
Solutia generala a sistemului:

$
\begin{cases}
\frac{dx}{dt} = 3x - 8y + 4z \cr
\frac{dy}{dt} = x + 5y = 2z \cr
\frac{dz}{dt} = -3x + 14y - 6z
\end{cases}
$,
$ t $ = variabila independenta

Forma matriceala:

$
\begin{bmatrix}
\frac{dx}{dt} \cr
\frac{dy}{dt} \cr
\frac{dz}{dt} \cr
\end{bmatrix}
=
\begin{bmatrix}
3 & -8 & 4 \cr
-1 & 5 &  -2 \cr
-3 & 14 & -6
\end{bmatrix}
\cdot
\begin{bmatrix}
x \cr
y \cr
z
\end{bmatrix}
$

Pentru acest sistem se cauta solutii de forma:

$
Y = 
\begin{bmatrix}
A_1 \cr
A_2 \cr
A_3
\end{bmatrix}
\cdot e^{rt}
$ =>
$
\begin{bmatrix}
3-r & -8 & 4 \cr
-1 & 5-r & -2 \cr
-3 & 14 & -6-4
\end{bmatrix}
\cdot
\begin{bmatrix}
A_1 \cr
A_2 \cr
A_3
\end{bmatrix}
=
\begin{bmatrix}
0 \cr
0 \cr
0
\end{bmatrix}
$

Sist admite solutii nenule <-> $ det(A - rI_3) = 0 $.

$
\Delta(r) = 
\begin{vmatrix}
\end{vmatrix}
$

Ecuatia caracteristica: $ r^3 - 2r^2 - r + 2 = 0 $
Rad: $ r_1 = -1 $; $ r_2 = 1 $; $ r_3 = 2 $

$
A - rI_3 = 
\begin{vmatrix}
3-r & -8 & 4 \cr
-1 & 5-r & -2 \cr
-3 & 14 & -6-r
\end{vmatrix}
$
, Complementii algebrici ai elem din linia nr 1 ai lui $ A - rI_3 $

$
\Gamma_{11} = 
\begin{vmatrix}
5-r & -2 \cr
14 & -6-r 
\end{vmatrix}
= (4+6)(r-5) + 28 = r^2 - 5r + 6r - 30 + 28 = r^2 + 4 - 2
$

$
 \Gamma_{12} =
(-1)^{1+2} \cdot
\begin{vmatrix}
-1 & -2 \cr
-3 & -6-4
\end{vmatrix} 
= ... => r = 
$

... tabel (pag8) ...

Solutiile:

$
Y_1 = 
\begin{bmatrix}
x \cr
y \cr
z
\end{bmatrix}
= V_1 \cdot e^{-t} =
\begin{bmatrix}
-2 \cr
1 \cr
4
\end{bmatrix}
\cdot e^{-t}
=
\begin{bmatrix}
-2e^{-t} \cr
e^{-t} \cr
4e^{-t}
\end{bmatrix}
$

$
Y_2 =
\begin{bmatrix}
x \cr
y \cr
z
\end{bmatrix}
= V_2 \cdot e^t =
\begin{bmatrix}
0 \cr
-1 \cr
-2
\end{bmatrix}
\cdot e^t =
\begin{bmatrix}
0 \cr
-e^t \cr
-2e^t
\end{bmatrix}
$

$
Y_3 =
\begin{bmatrix}
x \cr
y \cr
z
\end{bmatrix}
= V_3 \cdot e^{2t} = 
\begin{bmatrix}
4 \cr
-2 \cr
-5 
\end{bmatrix}
\cdot e^{2t} =
\begin{bmatrix}
4e^{2t} \cr
-2e^{2t} \cr
-5e^{2t}
\end{bmatrix}
$

Sol gen a sistemului:

$ Y = C_1Y_1 + C_2Y_2 + C_3Y_3 $

$ Y = 
\begin{bmatrix}
x \cr
y \cr
z
\end{bmatrix} 
=
\begin{bmatrix}
Y_1 & Y_2 & Y_3
\end{bmatrix}
\cdot 
\begin{bmatrix}
C_1 \cr
C_2 \cr
C_3
\end{bmatrix}
$

**Metoda 2** Metoda transformarii sistemuli de $ n $ ecuatii de ordinul 1, 
intr-o singura ecuate de ordinul $ n $ , cu coeficienti constanti.

$
\begin{cases}
\frac{dy}{dx} = 2y + z \cr
\frac{dz}{dx} = 6 + 2z
\end{cases}
$

- Se deriveaza una dintre cele 2 ecuatii: prima => $ y'' = 2y' + z' $
- Se utilizeaza a doua ecuatie, din care se exprima $ z' $ => $ z' = y + 2z $.
Se foloseste in prima.
=> $ y'' = 2y' + y + 2z $ \
Din prima ecuatie se exprima $ z $: $ z = y' - 2y $. \
=> $ y'' - 2y' - y = 2(y' -2y) $;
$ y'' - 2y' - y - 2y' + 4y = 0 $;
$ y'' - 4y' + 3y = 0 $ = ec dif. ord 2 in functia $ y $. Cautam sol de forma
$ y = e^{rx} $ => $ y' = re^{rx} $; $ y'' = r^2e^{rx} $ \
$ (r^2 - 4r + 3)e^{rx} = 0 | : e^{rx} $ = ecuatia caracteristica => \
$ r^2 - 4r + 3 = 0 $ \
$ \Delta = 16 - 12 = 4 $ \
$ r_{1,2} = \frac{4 \pm 2}{2}$;
$ \begin{cases}
r_1 = 1 \cr
r_2 = 3
\end{cases}
$ => 
$
\begin{cases}
y_1 = e^x \cr
y_2 = e^{3x}
\end{cases}
$ => \
$ y = C_1e^x + C_2e^{3x} $

Pentru calcului lui $ z $ folosim o relatie anterioara, dedusa din prima ecuatie:

$ z = y' - 2y $; $ y' = C_1e^x + 3C_2e^{3x} $ \
$z = y' - 2y = C_1e^x + 3C_2e^{3x} - 2C_1e^x - 2C_2e^{3x} $ \
$z = -C_1e^x + C_2e^{3x} $

Solutia generala a sistemului va fi:

$
\begin{cases}
y = C_1e^x + C_2e^{3x} \cr
z = -C_1e^x + C_2e^{3x}
\end{cases}
$

**Problema Cauchy**: 
$
\begin{cases}
y(0) = 1 \cr
z(0) = -1
\end{cases}
$ => tema: rezolvare problema Cauchy

**Exercitii (Tema)** Preferabil cu complementi algebrici ai elem din prima linie a matricei $ A - rI_3 $: $ \frac{A_1}{\Gamma_{11}(r)} = \frac{A{2}{\Gamma_{12}(r)}} = \frac{A_3}{\Gamma_{13}(r)} $
(1)
$
A = 
\begin{bmatrix}
5 & -3 & 2 \cr
6 & -4 & 4 \cr
4 & -4 & 5
\end{bmatrix}
$
; $\psi_a(\gamma) = (2-\gamma)(\gamma - 1)(\gamma - 3) $

(2)
$
A = 
\begin{bmatrix}
\end{bmatrix}
$ \
$ \psi_A(\gamma) = (- \gamma)()() $


### Cazul valorilor proprii multiple
- Metoda 1 - metoda coeficientilor nedeterminati (v pag3) 

Coordonatele vectorului propriu care corespunde unei valori proprii de ordinul $ r_k $
sunt proportionale cu complementii algebrici ai elementelor din prima linie a
matricei $ A - rI_r $ .

$ \frac{A_1}{\Gamma_{11}(r)} =
\frac{A_2}{\Gamma_{12}(r)} =
... = 
\frac{A_n}{\Gamma_{1n}(r)}
$

$
V = 
\begin{bmatrix}
A_1 \cr
A_2 \cr
... \cr
A_n
\end{bmatrix}
$

Daca valoarea proprie $ r = r_0 $ este .. de ordinul $ n $ , se poate arata ca solutiile sustemului care corespund acestei valor proprii se pot obtine astfel:

$
\gamma_{01} = 
\begin{bmatrix}
\Gamma_{11}(r) \cdot e^{rx} \cr
\Gamma_{12}(r) \cdot e^{rx} \cr
... \cr
\Gamma_{1n}(r) \cdot e^{rx} \cr
\end{bmatrix}, r = r_0
$

$
\gamma_{01} = 
\begin{bmatrix}
\frac{d}{dr}(\Gamma_{11}(r)) \cdot e^{rx} \cr
\frac{d}{dr}(\Gamma_{12}(r)) \cdot e^{rx} \cr
... \cr
\frac{d}{dr}(\Gamma_{1n}(r) \cdot e^{rx} \cr
\end{bmatrix}, r = r_0
$

...

$
\gamma_{0n} = 
\begin{bmatrix}
\frac{d^{(n-1)}}{dr^{n-1}}(\Gamma_{11}(r)) \cdot e^{rx} \cr
\frac{d^{(n-1)}}{dr^{n-1}}(\Gamma_{12}(r)) \cdot e^{rx} \cr
... \cr
\frac{d^{(n-1)}}{dr^{n-1}}(\Gamma_{1n}(r) \cdot e^{rx} \cr
\end{bmatrix}, r = r_0
$

**Exemplu**
$
\begin{cases}
\frac{dx}{dt} = 4x - y \cr
\frac{dy}{dt} = 3x + y - z \cr
\frac{dz}{dt} = x + z 
\end{cases}
$

Cautand solutii de forma:
$
Y = 
\begin{bmatrix}
A \cr
B \cr
C
\end{bmatrix}
\cdot e^{rt}
$

Se obtine ecuatia caracteristica:

$
det(A - rI_3) = 
\begin{vmatrix}
4-r & -1 & 0 \cr
3 & 1-r & -1 \cr
1 & 0 & 1-4
\end{vmatrix}
$ => 
$ -(r-2)^3 = 0 $; $ r_1 = r_2 = r_3 = 2 $ 

Calculam complementii algebrici ai elementelor din linia 1 a matricei
$ A - rI_3 $: 

$
\Gamma_{11}(r) = 
\begin{vmatrix}
1-r & -1 \cr
0 & 1-4
\end{vmatrix}
= (1-r)^2
$

$
\Gamma_{12}(4) =
(-1)^{1+2} \cdot
\begin{vmatrix}
3 & - 1 \cr
1 & 1-r
\end{vmatrix}
= 
-(3 - 3r + 1) = 3r - 4
$;

$
\Gamma_{13}(r) = (-1)^{1+3} \cdot
\begin{vmatrix}
1 & 1-r \cr
1 & 0 
\end{vmatrix}
= r - 1
$.

$
Y_1 = 
\begin{bmatrix}
\Gamma_{11}(r)e^{rt} \cr
\Gamma_{12}(r)e^{rt} \cr
\Gamma_{13}(r)e^{rt}
\end{bmatrix}
r=2
=
\begin{bmatrix}
(1-r)e^{rt} \cr
(3r-4)e^{rt} \cr
(r-1)e^{rt}
\end{bmatrix}
r = 2
=
\begin{bmatrix}
e^{2t} \cr
2e^{2t} \cr
e^{2t} 
\end{bmatrix}
$

$
Y_2 = 
\begin{bmatrix}
\frac{\partial}{\partial r}[(1-r)^2 e^{rt}] \cr
\frac{\partial}{\partial r}[(3r-4) e^{rt}] \cr
\frac{\partial}{\partial r}[(r-1) e^{rt}] \cr
\end{bmatrix} (r = 2)
=
\begin{bmatrix}
2(1-r)(-1)e^{rt} + (1-r)^2 e^{rt} \cr
3e^{rt} + (3r - 4) t e^{rt} \cr
e^{rt} + (r-1) t e^{rt}
\end{bmatrix} (r = 2)
=
\begin{bmatrix}
[(2r-2) + t(r-1)^2]e^{rt} \cr
[3 + t(3r-4)]e^{rt} \cr
[1 + (r-1)t] e^{rt}
\end{bmatrix}(r=2)
$
= (a doua solutie din sis fundamental)
$
\begin{bmatrix}
(2+t) e^{2t} \cr
(3+2t) e^{2t} \cr
(1+t) e^{2t}
\end{bmatrix}
$

$
Y_3 = 
\begin{bmatrix}
\frac{\partial}{\partial r}([2r - 2 + t(r-1^2)] e^{rt}) \cr
\frac{\partial}{\partial r}([3 + t(3r - 4)] e^{rt}) \cr
\frac{\partial}{\partial r}([-1t]e^{rt})
\end{bmatrix}(r=2)
$
=
$
e^{rt} \cdot
\begin{bmatrix}
2 + 2t(r-1) + t[(2r-2) + t(n-1)^2] \cr
3t + t(3 + t(3r-4)) \cr
t + t(1 + (r-1)t)
\end{bmatrix}(r=2)
$
=
$
\begin{bmatrix}
2 + 2t + t^2 + 2t \cr
3t + 2t^2 + 3t \cr
t + t^2 + t 
\end{bmatrix} \cdot e^{2t}
$
=
$
\begin{bmatrix}
t^2 + 4t + 2 \cr
2t^2 + 6t \cr
t^2 + 2t 
\end{bmatrix} \cdot e^{2t}
$

Sol:

$ Y = $

### Ecuatii de tip Euler

**Exemplu** - ecuatie de tip Euler (cu coeficienti variabili)

$ x^2y'' + xy' - y = 0 $, $ x > 0 $ 

- Metoda 1 - se face schimbare de variabila independenta $ x = e^t $ <=> $ t = ln(x) $.
- Metoda 2 - se cauta solutii de forma $ y = x^r $ =>
$ y' = r x^{r-1} $; $ y'' = r(r-1) x^{r-2} $ \
$ x^2 x^{r-2} r(r-1) + x r r^{r-1} - x^r = 0 $ \
$ x^r[r(r-1) + r - 1] = 0 | : x^r $ => 
$ r^2 - r + 4 - 1 = 0 $; \
$ r_2 - 1 = 0 $ -> ecuatia caracteristica asociata ecuatiei lui Euler. \
Are doua radacini: $ (r-1)(r+1) = 0 $ => $ r_1 = 1 $; $ r_2 = -1 $ =>
$ y_1 = x^1 = x $ ; $ y_2 = x^{-1} = \frac{1}{x} $;
$ B = \\{x, \frac{1}{x} \\} $; \
=> $ y = C_1x + C_2 \frac{1}{x} $ \
Problema Cauchy cu cond init:
$
\begin{cases}
y(1) = 1 \cr
y'(1) = 0
\end{cases}
$;
$ y'(x) = C_1 - \frac{1}{x} \cdot C_2 $; \
$
\begin{cases}
y(1) = C_1 + C_2 = 1 \cr
y'(1) = C_1 - C_2 = 0
\end{cases}
$ =>
$
\begin{cases}
2C_1 = 1 => C_1 = \frac{1}{2} \cr
C_2 = C_2 = \frac{1}{2}
\end{cases}
$

$
y = \frac{1}{2} \cdot x + \frac{1}{x} \frac{1}{x} $

(3)
Sa se determine ecuatia diferentiala care admite drept sistem fundamental de solutii functiile 
$ y_1 = x $ si $ y_2 = \frac{1}{x} $.
- (a) Se verifica faptul ca cele 2 functii sunt liniar independente => 
wronskianul celor 2 solutii:

$
w(y_1, y_2) \ne 0
$;
$ w(y_1, y_2) = 
\begin{vmatrix}
y_1 & y_2 \cr
y_1' & y_2'
\end{vmatrix}
=
\begin{vmatrix}
x & \frac{1}{x} \cr
1 & -\frac{1}{x^2}
\end{vmatrix}
$
=
$
-\frac{1}{x} - \frac{1}{x} = -frac{2}{x} \ne 0
$

- (b) Ecuatia cautata se obtine din conditia cu 3 solutii ale ecuatiei sa fie liniar dependente: <=>

$ w(y, y_1, y_2) = 0 $

$
\begin{vmatrix}
y & y_1 & y_2 \cr
y' & y_1' & y_2' \cr
y'' & y_2'' & y_3''
\end{vmatrix} = 0
$;

$
\begin{vmatrix}
y & x & \frac{1}{x} \cr
y' & 1 & -\frac{1}{x^2} \cr
y'' & 0 & \frac{2}{x^2}
\end{vmatrix}
= 0
$
=>
$ 
y'' \cdot
\begin{vmatrix}
x & \frac{1}{x} \cr
1 & -\frac{1}{x^2} 
\end{vmatrix}
\- y' \cdot
\begin{vmatrix}
x & \frac{1}{x} \cr
0 & \frac{2}{x^3}
\end{vmatrix}
\+ y \cdot
\begin{vmatrix}
1 & -\frac{1}{x^2} \cr
0 & \frac{2}{x^2} 
\end{vmatrix}
= 0
$

$ y''(-\frac{1}{x} - \frac{1}{x}) - y'(\frac{2}{x^2}) + y(\frac{2}{x^3}) = 0 $

$
-\frac{2}{x} y'' - \frac{2}{x^2} y' ...
$

$ x^2y'' +xy' - y = 0 $
