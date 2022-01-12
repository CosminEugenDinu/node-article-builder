### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 02.12.2021 

## Sisteme de ecuatii diferentiale liniare, de ordinul 1

**Definitie** Un sistem de ecuatii diferentiale de forma: \
(1)
$
\begin{cases}
\frac{dy_1}{dx} = a_{11}(x)y_1 + a_{12}(x)y_2 + ... + a_{1n}(x)y_n + f_1(x) \cr
\frac{dy_2}{dx} = a_{21}(x)y_1 + a_{22}(x)y_2 + ... + a_{2n}(x)y_n + f_2(x) \cr
... \cr
\frac{dy_n}{dx} = a_{n1}(x)y_1 + a_{n2}(x)y_2 + ... + a_{nn}(x)y_n + f_n(x) 
\end{cases}
$, \
unde $ a_{ij}, f_i : \hat{I} \subset \R \to \R $, $ i, j = \overline{1,n} $ sunt continue
pe $ \hat{I} $, iar $ y_1, y_2, ..., y_n : \hat{I} \to \R $ sunt functii derivabile
si au derivatele continue pe $ \hat{I} $ se numeste sistem de ecuatii diferentiale
liniare de ordinul 1, neomogen. $ x \in \hat{I} $ este variabila independenta, iar
$ y_1, y_2, ..., y_n $ sunt functiile necunoscute. Daca toate functiile 
$ f_1, f_2, ..., f_n $ (termenii liberi ai sistemului) sunt toate nule, atunci sistemul
se numeste omogen, de $ n $ ecuatii cu $ n $ functii necunoscute. \
Sistemul se mai poate scrie sub o forma condensata si astfel: \
(2) 
$
\frac{dy_i}{dx} = \sum_{j=1}^{n}{a_{ij}(x)y_i(x) + f_i(x)}
$,
$ \forall i = \overline{1,n} $ \
Astfel: definim vectorii $ Y = [y_1, y_2, ..., y_n]^t $ si
$ F(x) = [f_1(x), f_2(x), ..., f_n(x)]^t $ si matricea
$ A(x) = (a_{ij}(x))_{1 \le i,j \le n } $, sistemul (1) se poate scrie sub o forma
matriceala astfel: \
(3)
$
\frac{dY}{dx} = A(x)Y + F(x) $ = sistemul neomogen (1)
$ \
(4)
$
\frac{dY}{dx} = A(x)Y 
$ = sistemul omogen asociat

O solutie a sistemului (1) pe intervalul $ \hat{I} $ va fi un vector format din $ n $ 
functii $ y_1, y_2, ..., y_n $ de clasa $ C^1 $ pe $ \hat{I} $ si care verifica sistemul
in orice punct $ x \in \hat{I} $ .

**Teorema** Fie sistemul de n ecuatii diferentiale cu $ n $ functii necunoscute,
de ordinul 1, omogen: \
$ \frac{dY}{dx} = A(x)Y $, $ x \in \hat{I} $ \
Multimea solutiilor sale este un subspatiu vectorial finit dimensional al spatiului vectorial infinit dimensional $ C^1(\hat{I}) $. \
Fie: \
$
Y_1 =
\begin{bmatrix}
y_{11} \cr
y_{21} \cr
... \cr
y_{n1}
\end{bmatrix}
$;
$
Y_2 = 
\begin{bmatrix}
y_{12} \cr
Y_{22} \cr
... \cr
Y_{n2}
\end{bmatrix}
$;
$
...
$;
$
Y_n = 
\begin{bmatrix}
y_{1n} \cr
y_{2n} \cr
... \cr
y_{nn} 
\end{bmatrix}
$, 
**n solutii** liniar independente ale sistemului omogen 
$ \frac{dY}{dx} = A(x)Y $. \
Atunci orice solutie a sistemului omogen poate fi exprimata ca o combinatie liniara cu
coeficienti constanti $ C_1, C_2, ..., C_n $ a celor $ n $ solutii $ Y_1, Y_2, ..., Y_n $,
care formeaza o baza a spatiului solutiilor: \
$
Y = C_1Y_1 + C_2Y_2 + ... + C_nY_n
$ \
$
Y = \sum_{k=1}^{n}{C_kY_k}
$, \
$ C_k \subset \R $, $k = \overline{1,n} $. \
$ Y $ scrisa sub aceasta forma se numeste solutia generala a sistemului omogen. \
Din aceasta se poate obtine o solutie particulara a sistemului omogen prin particularizarea
constantelor $ C_1, C_2, ..., C_n $ in urma impunerii unui set de conditii initiale
sub forma: \
$
Y(x_0) = Y_0 = 
\begin{bmatrix}
y_1(x_0) \cr
y_2(x_0) \cr
... \cr
y_n(x_0)
\end{bmatrix}
=
\begin{bmatrix}
y_{10} \cr
y_{20} \cr
... \cr
y_{n0}
\end{bmatrix}
$, \
unde $ x_0 \in \hat{I} $, iar $ y_{10}, y_{20}, ..., y_{n0} $ sunt valorile initiale
ale functiilor necunoscute.

**Definitie** $ n $ solutii $ Y_1, Y_2, ..., Y_n $ ale sistemului omogen 
$ \frac{dY}{dx} = A(x) Y $ sunt liniar independente pe $ \hat{I} $ daca
determinantul matricei
$ \Delta(x) =
\begin{bmatrix}
Y_1 & Y_2 & ... & Y_n
\end{bmatrix}
$ 
este diferit de zero pe $ \hat{I} $. \
Matricea
$ \Delta(x) = 
\begin{bmatrix}
y_{11} & y_{12} & ... & y_{1n} \cr
y_{21} & y_{22} & ... & y_{2n} \cr
... & ... & ... & ... \cr
y_{n1} & y_{n2} & ... & y_{nn}
\end{bmatrix}
$
se numeste matricea fundamentala de solutii a sistemului omogen.

Solutia generala a sistemului omogen se scrie desfasurat astfel: \
$
Y =
\begin{bmatrix}
y_1 \cr
y_2 \cr
... \cr
y_n
\end{bmatrix}
=
\Delta(x) \cdot
\begin{bmatrix}
C_1 \cr
C_2 \cr
... \cr
C_n
\end{bmatrix}
= 
\begin{bmatrix}
y_{11} & y_{12} & ... & y_{1n} \cr
y_{21} & y_{22} & ... & y_{2n} \cr
... & ... & ... & ... \cr
y_{n1} & y_{n2} & ... & y_{nn}
\end{bmatrix}
\cdot
\begin{bmatrix}
C_1 \cr
C_2 \cr
... \cr
C_n
\end{bmatrix}
$ <=> \
$
\begin{cases}
y_1 = y_{11}C_1 + y_{12}C_2 + ... + y_{1n}Cn \cr
y_2 = y_{21}C_1 + y_{22}C_2 + ... + y_{2n}Cn \cr
... \cr
y_n = y_{n1}C_1 + y_{n2}C_2 + ... + y_{nn}Cn
\end{cases}
$

**Exemplu** Fie sistemul omogen de 2 ecuatii cu doua necunoscute: \
$
\begin{cases}
(1 - xe^x) \frac{dy_1}{dx} = -e^xy_1 + y_2 \cr
(1 - xe^x) \frac{dy_2}{dx} = e^xy_1 - xe^xy_2
\end{cases}
$,
$ 1 - xe^x \ne 0 $ pe $ \R $ \
Impartim cu factorul $ 1 - xe^x \ne 0 $ \
$ 
\begin{cases}
\frac{dy_1}{dx} = -\frac{e^x}{1-xe^x}y_1 + \frac{1}{1-xe^x}y_2 \cr
\frac{dy_2}{dx} = \frac{e^x}{1-xe^x}y_1 - \frac{xe^x}{1-xe^x}y_2
\end{cases}
$ \
$
\frac{dY}{dx} = A(x) Y
$;
$
Y =
\begin{bmatrix}
y_1 \cr
y_2
\end{bmatrix}
$ \
Un sistem fundamental de solutii pentru acest sistem este format din vectorii: \
$
Y_1 = 
\begin{bmatrix}
y_{11} \cr
y_{21}
\end{bmatrix}
=
\begin{bmatrix}
1 \cr
e^x
\end{bmatrix}
$;
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
$. \
$
det \Delta(x) =
det(Y_1, Y_2) = 
\begin{vmatrix}
1 & x \cr
e^x & 1 
\end{vmatrix}
=
1 - xe^x \ne 0
$. \
Solutia generala a sistemului va fi: o combinatie liniara, cu coeficienti constante arbitrare a vectorilor $ Y_1 $ si $ Y_2 $ care formeaza sistemul fundamental de solutii al spatiului solutiilor. \
$
Y = 
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
= 
\begin{bmatrix}
y_1 \cr
y_2
\end{bmatrix}
$ .

**Teorema 2** Matricea fundamentala de solutii a sistemului omogen,
$ W(x) = (Y_1, Y_2, ..., Y_n) $ 
satisface ecutatia diferentiala matriceala
$ \boxed{
  \frac{dW}{dx} = A(x) W(x)
} $ .

**Dem** \
$
\frac{dW}{dx} =
\begin{bmatrix}
\frac{dY_1}{dx} & \frac{dY_2}{dx} & ... & \frac{dY_n}{dx}
\end{bmatrix}
$ \
$
A(x) \cdot W(x) = 
A(x) \cdot
\begin{bmatrix}
Y_1 & Y_2 & ... & Y_n
\end{bmatrix}
=
\begin{bmatrix}
A(x)Y_1 & A(x)Y_2 & ... & A(x)Y_n
\end{bmatrix}
$ \
Identificand pe coloane, se obtine: \
$
\begin{cases}
\frac{dY_1}{dx} = A(x)Y_1 \cr
\frac{dY_2}{dx} = A(x)Y_2 \cr
... \cr
\frac{dY_n}{dx} = A(x)Y_n
\end{cases}
$ \
Teorema este demonstrata pentru ca $ Y_1, Y_2, ..., Y_n $ fiecare este solutie a
sistemului omogen $ \frac{dY}{dx} = A(x)Y $.


### Sisteme neomogene. Solutia generala si metoda variatiei constantelor

Fie sistemul liniar, neomogen, de n ecuatii, cu n functii necunoscute, scris sub forma matriceala:
$ \frac{dY}{dx} = A(x)Y + F(x) $ si sistemul omogen asociat: $ \frac{dY}{dx} = A(x)Y $. \
$ 
\begin{cases}
\frac{dY}{dx} = A(x)Y + F(x) \cr
\frac{dY}{dx} = A(x)Y
\end{cases}
$ .

**Teorema** Solutia sistemului neomogen este suma dintre solutia generala a sistemului
omogen asociat si o solutie particulara a sistemului neomogen: 
$ \boxed{
  Y = Y_o + Y_p
} $. 

**Dem** Fie $ Y_p(x) $ o solutie particulara a sistemului neomogen => \
$ \frac{dY_p}{dx} = A(x)Y_p + F(x) $, $ \forall x \in \hat{I} $. \
Facem schimbare de functie (vectoriala) necunoscuta $ Y = U + Y_p $, $ U $ = suma functie
(vectoriala) necunoscuta. \
Inlocuim in sistemul omogen: \
$ \frac{d}{dx}(U + Y_p) = A(x)(U + Y_p) + F(x) $ \
$ \frac{dU}{dx} + \frac{dY_p}{dx} = A(x)U + A(x)Y_p + F(x) $ \
$ \frac{dU}{dx} = A(x)U $ <=> Functia vectoriala $ U $ este solutia generala a sistemului omogen asociat. \
Daca se cunoaste solutia gnenrala a sistemului omogen asociat, atunci o solutie
particulara a sistemului neomogen se poate determina prin metoda variatiei constantelor
(Lagrange).

**Teorema** Fie sistemul neomogen: $ \frac{dY}{dx} = A(x)Y + F(x) $ si sistemul
omogen asociat $ \frac{dY}{dx} = A(x) Y $. \
Fie $ Y_o $ solutia generala a sistemului omogen <=> se cunoaste matricea fundamentala
de solutii a sistemului omogen, 
$ W(x) =
\begin{bmatrix}
Y_1 & Y_2 & ... & Y_n
\end{bmatrix}
$
si $ Y_o = W(x)C $ . \
Solutia particulara a sistemului neomogen este data de relatia: \
$ Y_p(x) = W(x) \cdot C(x) $, unde
$ \frac{dC(x)}{dx} = (W(x))^{-1} \cdot F(x) $.

**Dem** Se urmareste exact algoritmul parcurs la ecuatiile liniare (de ord 1, respectiv ord n). \
Fie
$ W(x) = 
\begin{bmatrix}
Y_1 & Y_2 & ... & Y_n
\end{bmatrix}
$,
$ det W(x) \ne 0 $ pe $ \hat{I} $,
matricea fundamentala de solutii a sistemului omogen \
$ Y_o = W(x) C $;
$ C =
\begin{bmatrix}
C_1 & C_2 & ... & C_n
\end{bmatrix}^t
$ \
$ 
Y_o = Y_1C_1 + ... Y_nC_n = W(x)C
$ . \
Presupunem ca vectorul $ C $ nu este un vector cu toate componentele constante,
ci ca acestea sunt functii de variabila independenta: $ Y_o = W(x)C(x) $.
Punem conditia ca acest $ Y_o $ sa verifice sistemul neomogen: \
$
\frac{dY_o}{dx} = \frac{dW(x)}{dx} \cdot C(x) + W(x) \cdot \frac{dC(x)}{dx}
$ . \
Inlocuim in sistemul omogen: \
$
\frac{dW(x)}{dx} C(x) + W(x) \frac{dC(x)}{dx} = A(x) W(x) C(x) + F(x)
$ \
$
[\frac{dW(x)}{dx} - A(x)W(x)]C(x) + W(x) \frac{dC(x)}{d} = F(x)
$ \
Cum $ W(x) $ este matrice fundamentala de solutii, si deci verifica sitemul omogen => \
$ \frac{dW}{dx} - A\cdot W \equiv 0_n $ => \
$ W(x) \frac{dC(x)}{dx} = F(x) $. Dar $ W(x) $ are $ det(W(x)) \ne 0 $ =>
$ W(x) $ este inversabila. Inmultim la stg. cu $ (W(x))^{-1} $ => \
$ (W(x))^{-1} \cdot W(x) \cdot \frac{dC(x)}{dx} = W^{-1}(x) \cdot F(x) $ \
$ \boxed{
 \frac{dC(x)}{dx} = W^{-1}(x) \cdot F(x)
} $ => \
$ C(x) = \int(W^{-1}(x)F(x))dx + K $ \
$ K = 
\begin{bmatrix}
K_1 \cr
K_2 \cr
... \cr
K_n
\end{bmatrix}
$ => \
$ Y_o(x) = W(x) C(x) =
\underline{W(x) \int(W^{-1}F(x))dx} + \underline{W(x) \cdot K}
$ \
$ \boxed{Y_p(x) = W(x) \int(W^{-1}F(x))dx} $ $ \boxed{Y_o(x) = W(x) K} $

**Exemplu** Fie sistemul de 2 ecuatii cu 2 necunoscute, liniar si neomogen, anterior: \
$
\begin{cases}
y_1' = -\frac{e^x}{1-xe^x}y_1 + \frac{1}{1-xe^x}y_2 + 1 \cr
y_2' = \frac{e^x}{1-xe^x}y_1 - \frac{xe^x}{1-xe^x}y_2 + e^x
\end{cases}
$;
$
F(x) =
\begin{bmatrix}
1 \cr
e^x
\end{bmatrix}
$. \
$
W(x) = 
\begin{bmatrix}
Y_1 & Y_2
\end{bmatrix}
=
\begin{bmatrix}
1 & x \cr
e^x & 1
\end{bmatrix}
$ = matricea fundamentala de solutii. \
$ det(W(x)) = 1 - xe^x \ne 0 $ pe $ \R $ => $ \exists W^{-1}(x) $ \
$ (W(x))^t = 
\begin{bmatrix}
1 & e^x \cr
x & 1
\end{bmatrix}
$; 
$
W^*(x) = 
\begin{bmatrix}
1 & -x \cr
-e^x & 1
\end{bmatrix}
$ \
$
W^{-1}(x) = \frac{1}{det(W(x))} \cdot W^*(x)
=
\frac{1}{1-xe^x} \cdot 
\begin{bmatrix}
1 & -x \cr
-e^x & 1
\end{bmatrix}
$ \
$
W^{-1}(x)F(x) = 
\frac{1}{1-xe^x}
\cdot
\begin{bmatrix}
1 & -x \cr
-e^x & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
1 \cr
e^x
\end{bmatrix}
=
\frac{1}{1-xe^x} \cdot
\begin{bmatrix}
1-xe^x \cr
-e^x+e^x
\end{bmatrix} =
\boxed{
  W^{-1}(x)F(x) =
  \begin{bmatrix}
  1 \cr
  0 
  \end{bmatrix}
} $ => \
$ \int(W^{-1}(x)F(x))dx =
\int(
  \begin{bmatrix}
  1 \cr
  0
  \end{bmatrix}
)dx =
\begin{bmatrix}
\int(1)dx \cr
\int(0)dx
\end{bmatrix}
$ => \
$
Y(x) =
W(x)[\int(W^{-1}(x)F(x))dx + K]
=
\begin{bmatrix}
1 & x \cr
e^x & 1
\end{bmatrix}
\Big(
  \begin{bmatrix}
  x \cr
  0
  \end{bmatrix}
  +
  \begin{bmatrix}
  K_1 \cr
  K_2
  \end{bmatrix}
\Big) 
$ \
$
\begin{bmatrix}
y_1 \cr
y_2
\end{bmatrix}
=
\begin{bmatrix}
1 & x \cr
e^x & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
x + K_1 \cr
K_2
\end{bmatrix}
=
\begin{bmatrix}
x + K_1 + xK_2 \cr
e^x(x+K_1) + K_2
\end{bmatrix}
=
\begin{bmatrix}
K_1 + xK_2 \cr
K_1e^x + K_2
\end{bmatrix}
+
\begin{bmatrix}
x \cr
xe^x
\end{bmatrix}
=
\boxed{
  Y_o + Y_p
}
$ \
$
Y_o = W(x)
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
$ \
$
Y_p =
\begin{bmatrix}
x \cr
xe^x
\end{bmatrix}
$

Pentru sistemul dat sa se determine si solutia problemei Cauchy cu conditiile initiale: \
$
\begin{cases}
y_1(0) = 0 \cr
y_2(0) = 1
\end{cases}
$ \
$ 
\begin{cases}
y_1(x) = C_1 + xC_2 + x \cr
y_2(x) = C_1e^x + C_2 + xe^x
\end{cases}
$ => \
$
\begin{cases}
y_1(0) = C_1 \cr
y_2(0) = C_1 + C_2
\end{cases}
$ \
$
\begin{cases}
C_1 = 0 \cr
C_2 = 1
\end{cases}
$ => \
$
\begin{cases}
y_1(x) = x + x = 2x \cr
y_2(x) = 1 + xe^x
\end{cases}
$ \
$ \boxed{
  \begin{cases}
  y_1(x) = 2x \cr
  y_2(x) = 1 + xe^x
  \end{cases}
}
$

### Constructia unui sistem de ecuatii diferentiale, liniar si omogen, de ordinul 1, de sistem fundamental de solutii dat (de **n** ecuatii cu **n** necunoscute)

Stiind ca multimea solutiilor unui astfel de sistem este un spatiu vectorial
**n**-dimensional si o baza a sa este formata din **n** solutii liniar independente =>
$ n + 1 $ solutii **vor fi liniar dependente**. Presupunem ca se da o baza a spatiului solutiilor <=> o matrice fundamentala de solutii: \
$ W(Y_1, Y_2, ..., Y_n) = 
\begin{bmatrix}
y_{11} & y_{12} & ... & y_{1n} \cr
y_{21} & y_{22} & ... & y_{2n} \cr
... & ... & ... & ... \cr
y_{n1} & y_{n2} & ... & y_{nn}
\end{bmatrix}
$ \
si $ det(W(x)) \ne 0 $. \
Fie
$ Y =
\begin{bmatrix}
y_1 \cr
y_2 \cr
... \cr
y_n
\end{bmatrix}
$
a $ a-n+1 $ solutie a sistemului => \
$
det
\Big(
\begin{bmatrix}
\frac{dy_k}{dx} & \frac{dy_{k_1}}{dx} & \frac{dy_{k_2}}{dx} & ... & \frac{dy_{k_n}}{dx} \cr
y_1 & y_{11} & y_{12} & ... & y_{1n} \cr
y_2 & y_{21} & y_{22} & ... & y_{2n} \cr
... & ... & ... & ... & ... \cr
y_n & y_{n1} & y_{n2} & ... & y_{nn}
\end{bmatrix}
\Big)
= 0
$,
pentru orice $ k = 1, 2, 3, ..., n $ \
Aceste **n** relatii reprezinta cele **n** ecuatii ale sistemului cautat.

Sa se formeze sistemul omogen de 2 ecuatii, de ordinul 1, care admite urmatorul sistem fundamental de solutii: \
$ 
Y_1 =
\begin{bmatrix}
\cos(2x) \cr
-\sin(2x)
\end{bmatrix}
$; 
$
Y_2 =
\begin{bmatrix}
\sin(2x) \cr
\cos(2x)
\end{bmatrix}
$ \
Verificam ca $ Y_1 $ si $ Y_2 $ formeaza un sistem fundamental de solutii 
$ det
\begin{bmatrix}
Y_1 & Y_2
\end{bmatrix}
\ne 0
$ \
$ det
\begin{bmatrix}
\cos(2x) & \sin(2x) \cr
-\sin(2x) & \cos(2x)
\end{bmatrix}
=
\cos^2(2x) + \sin^x(2x) = 1
$,
$ \forall x \in \R $ \
$ k = 1 $: \
$
\begin{vmatrix}
y_1' & -2\sin(2x) & 2\cos(2x) \cr
y_1 & \cos(2x) & \sin(2x) \cr
y_2 & -\sin(2x) & \cos(2x)
\end{vmatrix}
= 0 $ <=> $ y_1' = 2y_2 $ \
$ k = 2 $ : \
$
\begin{vmatrix}
y_2' & -2\cos(2x) & -2\sin(2x) \cr
y_1 & \cos(2x) & \sin(2x) \cr
y_2 & -\sin(2x) & \cos(2x)
\end{vmatrix}
= 0 $ <=> $ y_2' = -2y_1 $ \
$
\begin{cases}
y_1' = 2y_2 \cr
y_2' = -2y_1
\end{cases}
$ <=> \
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

### Sisteme de ecuatii diferentiale liniare, omogene, cu coeficienti constanti

**Forma generala**: \
$
\begin{cases}
\frac{dy_1}{dx} = a_{11}y_1 + a_{12}y_2 + ... + a_{1n}y_n \cr
\frac{dy_2}{dx} = a_{21}y_1 + a_{22}y_2 + ... + a_{2n}y_n \cr
... \cr
\frac{dy_n}{dx} = a_{n1}y_1 + a_{n2}y_2 + ... + a_{nn}y_n
\end{cases}
$;
$ \frac{dy}{dx} = AY $, $ a_{ij} \in \R $, $i,j = \overline{1,n}$\
Pentru un astfel de sistem se poate determina intotdeauna un sistem fundamental de solutii,
deci solutia sa generala. \
Se cauta solutii de forma:
$ \boxed{
  Y =
  \begin{bmatrix}
  y_1 \cr
  y_2 \cr
  ... \cr
  y_n
  \end{bmatrix}
  =
  \begin{bmatrix}
  A_1 \cr
  A_2 \cr
  ... \cr
  A_n
  \end{bmatrix}
  \cdot
  e^{rx}
}
$, $ (A_i)_{i=1,n}, r $ sunt constante. (la fel ca la ecuatiile de ordinul **n** cu coeficienti constanti). \
Conditia ca $ Y $ sa verifice sistemul omogen: \
$
\frac{dY}{dx} =
\begin{bmatrix}
y_1' \cr
y_2' \cr
... \cr
y_n'
\end{bmatrix}
=
\begin{bmatrix}
A_1r \cr
A_2r \cr
... \cr
A_nr
\end{bmatrix}
\cdot e^{rx}
$

$
\begin{bmatrix}
A_1r \cr
A_2r \cr
... \cr
A_nr
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
$ $ |: e^{rx} $ \
$
\begin{cases}
A_1r = a_{11}A_1 + a_{12}A_2 + ... + a_{1n}A_n \cr
A_2r = a_{21}A_1 + a_{22}A_2 + ... + a_{2n}A_n \cr
... \cr
A_nr = a_{n1}A_1 + a_{n2}A_2 + ... + a_{nn}A_n
\end{cases}
$ \
$
\begin{cases}
(a_{11}-r)A_1 + a_{12}A_2 + ... + a_{1n}A_n = 0 \cr
a_{21}A_1 + (a_{22}-r)A_2 + ... + a_{2n}A_n = 0 \cr
... \cr
a_{n1}A_1 + a_{n2}A_2 + ... + (a_{nn}-r)A_n = 0
\end{cases}
$ \
Am obtinut un sistem omogen (algebric) de **n** ecuatii, cu necunoscutele
$ A_1, A_2, ..., A_n $ si $ r $. Acesta admite intotdeauna solutia banala:
$ A_1 = A_2 = ... = A_n = 0 $, corespunzatoare solutiei nule ... de ecuatie diferentiala.
..., insa, solutiile nenule ale sistemului algebric, acestea conducand la solutii neneule
pt sist de ec. diferentiale. ... ca acest sistem algebric sa admita si solutii nenule
care au determinantul matricei coeficientilor sa fie egal cu zero.

$ \Delta(r) =
\begin{vmatrix}
a_{11}-r & a_{12} & a_{13} & ... & a_{1n} \cr
a_{12} & a_{22}-r & a_{23} & ... & a_{2n} \cr
... & ... & ... & ... & ... \cr
a_{n1} & a_{n2} & a_{n3} & ... & a_{nn}-r
\end{vmatrix}
\equiv 0
$ \
$
det(A-rI_n) = 0
$ => $ \Delta(r) $ = polinomul caracteristic al matricei $ A $ a coeficientilor sistemului => $ (r_i)_{i=\overline{1,n}} $ sunt radacinile polinomului caracteristic al
matricei $ A $, deci valorile proprii ale matricei $ A $. \
$ A_1, A_2, ..., A_n $ sunt coordonatele vectorilor proprii corespunzatori valorilor
proprii ale matricei $ A $ .

**Algoritmul de rezolvare**
- (1) Se calculeaza polinomul caracteristic al matricei $ A $ a coeficientilor sistemului;
$ \varphi_A(r) = det(A-rI_n) = 0 $
- (2) Se determina radacinile polinomului caracteristic, deci valorile proprii ale matricei $ A $
- (3) Pentru fiecare valoare proprie se determina coordonatele vectorului propriu caracteristic \
$
r_1 \to
\begin{bmatrix}
A_{11} \cr
A_{21} \cr
... \cr
A_{n1}
\end{bmatrix}
$ => 
$
Y_1 =
\begin{bmatrix}
A_{11} \cr
A_{21} \cr
... \cr
A_{n1}
\end{bmatrix}
\cdot e^{r_1x}
$ \
... \
$
r_n \to
\begin{bmatrix}
A_{1n} \cr
A_{2n} \cr
... \cr
A_{nn}
\end{bmatrix}
$ => 
$ 
Y_n = 
\begin{bmatrix}
A_{11} \cr
A_{2n} \cr
... \cr
A_{nn}
\end{bmatrix}
\cdot e^{r_nx}
$

Solutia generala a sistemului de ecuatii diferentiale va fi:\
$
Y =
\begin{bmatrix}
y_1 \cr
y_2 \cr
... \cr
y_n
\end{bmatrix}
=
\begin{bmatrix}
Y_1 & Y_2 & ... & Y_n
\end{bmatrix}
\cdot
\begin{bmatrix}
C_1 \cr
C_2 \cr
... \cr
C_n
\end{bmatrix}
$

Acest algoritm  corespunde cazului cand valorile proprii ale matricei $ A $ sunt reale si 
distincte:
$ r_1 \ne r_2 \ne ... \ne r_n $, $ r_i \in \R $ \

**Cazul 2** o radacina $ r = r_i $ este reala si multipla, de ordinul $ p $. In acest
caz, pentru sistemul de ecuatii diferentiale se cauta solutii de forma: \
$ Y_i =
\begin{bmatrix}
P_1(x) \cr
P_2(x) \cr
... \cr
P_n(x) 
\end{bmatrix}
\cdot e^{r_ix}
$, 
unde polinoamele $ P_k(x) $, $ k = \overline{1,n} $ au gradul $ p-1 $ si coeficientii 
nedeterminati. Punand condicia ca $ Y_i $ sa verifica sistemul omogen de ecuatii 
diferentiale, se vor face identificarile astfel incat in final sa ramana numai $ p $ 
constante in exprimarea ca solutii finale. \
Solutia $ Y_i $ care corespunde valorilor proprii de ordinul $ p $, $ r_i $ va arata astfel: \
$ Y_i(x) =
\begin{bmatrix}
\alpha_{11} \cr
\alpha_{21} \cr
... \cr
\alpha_{n1}
\end{bmatrix}
\cdot A_1r^{r_ix} +
\begin{bmatrix}
\alpha_{12} \cr
\alpha_{22} \cr
... \cr
\alpha_{n2}
\end{bmatrix}
\cdot A_2 x e^{r_ix} + ... +
\begin{bmatrix}
\alpha_{1p} \cr
\alpha_{2p} \cr
... \cr
\alpha_{np}
\end{bmatrix}
\cdot A_px^{p-1}e^{r_ix}
$

**Cazul 3** Daca $ r_1 = \alpha + i\beta $ si $ r_2 = \alpha - i\beta $ => lor le vor
corespunde $ Y_1 $ si $ Y_2 $  solutii in sistem fundamental. \
Se recomanda ca in loc de $ Y_1 $ si $ Y_2 $ sa se aleaga solutiile: 
$ \boxed{
  \overline{Y_1} = \frac{Y_1 + Y_2}{2}
} $
$ \boxed{
  \overline{Y_2} \frac{Y_1 - Y_2}{2i}
} $,
care au toate coordonatele numere reale.

**Cazul 4** Cazul radacinilor complex-conjugate multiple se trateaza similar ca la ecuatiile cu coeficienti constantei.
