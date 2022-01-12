### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 25.11.2021 

## Aplicatii la ecuatii diferentiale liniare, de ordinul n, cu coeficienti constanti si variabili, omogene si neomogene

**Forma generala a ecuatiei:**

(1) $ a_0(x)y^{(n)} + a_1(x)y^{(n-1)} + ... + a_{n-1}(x)y' + a_n(x)y = f(x) $, 
$ a_0, a_1, ..., a_n, f : \hat{I} \to \R $, continue pe $\hat{I}$. \
Daca $ a_i(x) = a_i $, $ i = \overline{0,n} $ sunt constante atunci avem ecuatiile cu 
coeficienti constanti.
- (1) $ A_n(y) = f(x) $ -> ecuatia neomogena
- (2) $ A_n(y) = 0 $ -> ecuatia omogena asociata

Solutia generala a ecuatiei neomogene este suma dintre solutia generala a ecuatiei
omogene asociate si o solutie particulara a ecuatiei neomogene.

Multimea solutiilor ecuatiei omogene are o structura de spatiu vectorial de dimensiune
$ n $ (= ordinum ecuatiei) peste corpul $\R$ sau $\Complex $. O baza a spatiiului
solutiilor este formata din $ n $ solutii ale ecuatiei omogene, liniar independente.

$ B = \\{ y_1, y_2, ..., y_n \\}$; $ A_n(y_i) = 0 $, $ \forall i = \overline{1,n} $

$ W(y_1, y_2, ..., y_n) \ne 0 $ pe $ \hat{I} $.

=> Sol. gen. a ec. omogene este o combinatie liniara, cu coeficienti constante arbitrare
a elementelor bazei: \
$ y_o = C_1y_1 + C_2y_2 + ... + C_ny_n $

O solutie particulara a ecuatiei neomogene se poate obtine prin metoda variatiei
constantelor sau prin metoda coeficientilor nedeterminati.

Pentru ecuatiile cu coeficienti constanti se poate determina intotdeauna un sistem
fundamental de solutii pt ecuatia omogena, cautand solutii de forma
$ \boxed{
  y = e^{rx}
} $, $ r \in \R $.

Se obtine ecuatia caracteristica asociata ecuatiei omogene, cu coeficienti constanti: \
$ a_0 r^n + a_1 r^{n-1} + ...+ a_{n-i} r + a_n = 0 $; 
$ r_1, r_2, ..., r_n \in \R (\Complex) $;
$\forall r_i, i = 1, n$; $ \to $ $ y_i = e^{r_i x} $

Date problema: determinarea ecuatiei diferentiale de sistem fundamental dat.

(1) Sa se determine ecuatia diferentiala omogena care admite ca baza a spatiului solutiilor \
$ B = \\{ \ln(x), x\ln(x) \\}$; $ x \in \R \setminus \\{ 1 \\} $. \
(a) Se verifica independenta solutiilor date: \
$ w(y_1, y_2) \ne 0 $ \
$ w(y_1, y_2) =
\begin{vmatrix}
y_1 & y_2 \cr
y_1' & y_w'
\end{vmatrix}
=
\begin{vmatrix}
\ln(x) & x\ln(x) \cr
\frac{1}{x} & \ln(x) + 1
\end{vmatrix}
= 
\ln^2(x) + \cancel{\ln(x)} - \cancel{\ln(x)} = \ln^2(x) \ne 0 $ \
Ecuatia cautata este data de conditia ca **3** solutii distincte ale ecuatiei omogene sa fie liniar dependente ! \
$ w(y, y_1, y_2) = 0 $; $ \forall x \ne 1 $ \
$
\begin{vmatrix}
y & y_1 & y_2 \cr
y' & y_1' & y_2' \cr
y'' & y_1'' & y_2''
\end{vmatrix}
= 
\begin{vmatrix}
y & \ln(x) & x\ln(x) \cr
y' & \frac{1}{x} & 1 + \ln(x) \cr
y'' & -\frac{1}{x^2} & \frac{1}{x}
\end{vmatrix}
= 0 $ \
$ (-1)^{1+3}y'' \cdot
\begin{vmatrix}
\ln(x) & x\ln(x) \cr
\frac{1}{x} & 1 + \ln(x)
\end{vmatrix}
\+ (-1)^{1+2} \cdot y' \cdot
\begin{vmatrix}
\ln(x) & x\ln(x) \cr
-\frac{1}{x^2} & \frac{1}{x}
\end{vmatrix}
\+ (-1)^{1+1} \cdot y \cdot
\begin{vmatrix}
\frac{1}{x} & 1 + \ln(x) \cr
-\frac{1}{x^2} & \frac{1}{x}
\end{vmatrix}
= 0 $ ...... 

Pentru ecuatiile omogene cu coeficienti variabili nu exista o metoda generala de determinare
a bazei spatiului solutiilor (cu exceptia ecuatiilor de tip Euler si Cauchy).

Totusi, in anumite conditii verificate de coeficientii ecuatiei diferentiale, se pot afla
unele compnente din sistemul fundamental de solutii.

**Exemplu** Sa se determine **solutia generala** a ecuatiei omogene: \
$ xy''' - y'' - xy' + y = 0 $ = ecuatie cu coeficienti variabili \
Daca suma coeficientilor ecuatiei este $ = 0 $ => $ y = e^x $ este solutie: \
$ y' = y'' = e^x $ => \
$ e^x(x - 1 - x + 1) = 0 $, $ \forall x \ne 0 $ => \
$ \boxed{
  y_1 = e^x
} $ \
Daca suma coeficientilor cu semne alternate este nula => \
$ y = e^{-x} $ => \
$ y' = -e^{-x} $ \
$ y'' = e^{-x} $ \
$ y''' = -e^{-x} $ \
$ -e^{-x} x - e^{-x} - x(-e^{-x}) + e^{-x} = e^{-x}(-x -1 + x + 1) = 0 $ => \
$ \boxed{
  y_2 = e^{-x}
} $ \
Daca $ a_{n-1}(x) + xa_n(x) = 0 $ => \
$ y = x $ este solutie => \
$ y' = 1 $ \
$ y'' = y''' = 0 $ \
=> $ -x + x = 0 $ => $ y = x $ este solutie => \
$ B = \\{ x, e^x, e^{-x} \\} $ \
Se calculeaza $ w(x, e^x, e^{-x}) \ne 0 $ => \
$ y_o = C_1x + C_2e^x + C_3e^{-x} $ 

**Exercitiu** Sa se determine solutia generala a ecuatiei omogene de ordinul 2: \
$ (x-1)y'' - xy' + y = 0 $ \
**Obs** Daca pt o ecuatie cu coef variabili se cunoaste o solutie, $ y_1(x) $, atunci
prin schimbarea de functie $ y = z \cdot y_1(x) $ se reduce ordinul ecuatiei cu o unitate.

### Aplicatii la ecuatii cu coeficienti variabili de tip Euler sau Cauchy

#### **(I) Euler** \
$ a_0x^n y^{(n)} + a_1x^{n-1}y^{(n-1)} + ... + a_{n-1}xy' + a_ny = 0 $, $ x \ne 0 $ 

**Metoda 1** Se face schimbarea de variabila independenta $ x = e^t $ <=> \
$ t = \ln(x) $ \
Derivatele lui $ y $ din ecuatie (in raport cu $ x $) se vor exprima cu ajutorul derivatelor
lui $ y $, dar in raport cu suma variabila, $ t $. \
$ \boxed{
  y' = \frac{dy}{dx}
} $;
$ \boxed{
  \dot{y} = \frac{dy}{dt} 
} $ \
$ y = y(x) = y(e^t) $ \
$ t = \ln(x) $ => $ \frac{dt}{dx} = \frac{1}{x} = e^{-t} $ \
$ y' = \frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = e^{-t}\dot{y} $ \
$ y_{(x)}'' = \frac{d^2y}{dx^2} = \frac{d}{dx}(\frac{dy}{dx}) = \frac{d}{dt}(\frac{dy}{dx})\cdot \frac{dt}{dx} = \frac{d}{dt}(e^{-t}\dot{y})e^{-t} = e^{-t}(-e^{-t}\dot{y} + e^{-t}\ddot{y}) = e^{-2t}(\ddot{y}-\dot{y}) $ \
$
y_{(x)}'''
=
\frac{d^3y}{dx^3}
=
\frac{d}{dx} (\frac{d^2y}{dx^2})
=
\frac{d}{dt}(\frac{d^2y}{dx^2}) \cdot \frac{dt}{dx}
=
\frac{d}{dt}[e^{-2t}(\ddot{y} - \dot{y})]e^{-t}
=
e^{-t}[-2e^{-2t}(\ddot{y}-\dot{y}) + e^{-2t}(\dot{\ddot{y}} - \ddot{y})]
= 
e^{-3t}(\dot{\ddot{y}} - 3\ddot{y} + 2\dot{y})
$ 

**Moteda 2** Se cauta solutii de forma
$ \boxed{
  y = x^r
} $ \
$ x = e^t $ \
$ y = e^{rt} = (e^t)^r = x^r $ \
$ y' = (x^r)' = rx^{r-1} $ \
$ y'' = (x^r)'' = r(r-1)x^{r-2} $ \
$ y''' = (x^r)''' = r(r-1)(r-2)x^{r-3} $ \
$ .......... $ 

**Exercitii**

(1) $ x^3y''' + 2x^2y'' - xy' + y = 0 $, $ x \ne 0 $ \
Cautam solutii de forma $ \boxed{y = x^r} $ \
$ y' = rx^{r-1} $ \
$ y'' = r(r-1)x^{r-2} $ \
$ y''' = r(r-1)(r-2)x^{r-3} $ \
$ x^3x^{r-3}r(r-1)(r-2) + 2x^2 x^{r-2}r(r-1) - xrx^{r-1} + x^r = 0 $ \
$ x^r[r(r-1)(r-2) + 2r(r-1) - r + 1] = 0 $ $ |: x^r \ne 0 $ \
$ (r-1)[r^2 - \cancel{2r} + \cancel{2r} - 1] = 0 $ \
$ (r-1)(r^2-1) = 0 $ \
$ (r-1)^2(r+1) = 0 $ => \
$ r_1 = r_2 = 1 $; $ r_3 = -1 $ \
$ r^3 - r^2 - r + 1 = 0 $ Aceasta ecuatie caracteristica este asociata ecuatiei diferentiale
in functia necunoscuta $ g(t) $: \
$ \dot{\ddot{y}} - \ddot{y} - \dot{y} + y = 0 $ => \
$ y = e^{rt} $ \
$ r_1 = r_2 = 1 $ => $ y_1 = e^t $; $ y_2 = te^t $ \
$ r_3 = -1 $ => $ y_3 = e^{-t} $ => \
$ y_1(x) = x $; $ y_2(x) = x\ln(x) $; $ y_3(x) = \frac{1}{x} $ \
$ \boxed{
  y_o = C_1x + C_2x\ln(x) + C_3 \frac{1}{x}
} $

#### **Ecuatii de tip Cauchy**
$ a_0(ax + b)^n y^{(n)} + a_1(ax+b)^{n-1}y^{(n-1)} + ... + a_{n-1}(ax+b)y' + a_ny = f(x) $ \
$ x^k \to (ax+b)^k $; $ k = 1,2,..., n$ \
Se face schimbarea de variabile independenta \
$ ax + b = e^t $ \
$ ax = e^t - b $ \
$ x = \frac{1}{a}(e^t-b) $ \
$ y' = \frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} $ \
$ t = \ln(ax+b) $ \
$ \frac{dt}{dx} = \frac{a}{ax+b} $ \
$ \frac{dt}{dx} = a e^{-t} $ \
$ y' = a\dot{y} e^{-t} $ \
$ y'' = \frac{d}{dx}(\frac{dy}{dx})
=
\frac{d}{dt}(a\dot{y}e^{-t})ae^{-t} 
=
a^2e^{-t}(\ddot{y}e^{-t} - \dot{y}e^{-t})e^{-t}
=
a^2e^{-2t}(\ddot{y} - \dot{y})
= .........
$

**Exemplu** \
$ (x+1)^2y'' + 3(x+1)y' + y = 0 $ \
$ x + 1 = e^t $, $ (a = 1) $ \
$ y = (x+1)^r $ (Metoda 2) \
$ y' = r(x+1)^{r-1} $ \
$ y'' = r(r-1)(x+1)^{r-2} (x+1)^2 r(r-1)(x+1)^{r-2} + 3(x+1)r(x+1)^{r-1} + (x+1)^r = 0 $ \
$ (x+1)^r[r(r-1) + 3r + 1] = 0 $ $ |: (x+1)^r \ne 0 $ \
$ r^2 - r + 3r + 1 = 0 $ \
$ r^2 + 2r + 1 = 0 $\
$ (r+1)^2 = 0 $ \
$ \underline{r_1 = r_2 = -1} $. \
$ r^2 + 2r + 1 = 0 $ => \
$ \ddot{y} + 2\dot{y} + y = 0 $ \
$ y = y(t) $ => \
$ y_1 = e^{-t} $; $ y_2 = te^{-t} $ \
$ e^t = x + 1 $ => \
$ t = \ln(x+ 1) $ \
$ e^{-t} = \frac{1}{x+1} $ \
$ y_1(x) = \frac{1}{x+1} $ \
$ y_2(x) = \frac{\ln(x+1)}{x+1} $ \
$ \boxed{
  y_o = C_1\frac{1}{x+1} + C_2\frac{\ln(x+1)}{x+1} 
} $

**Ecuatie** cu coeficienti constanti \
$ y''' - 3y' - 2y = 0 $ Ec. dif de ord 3 cu coef ct. \
Cautam solutii de forma $ \boxed{y = e^{rx}} $ \
$ y' = re^{rx} $ \
$ y'' = r^2e^{rx} $ \
$ y''' = r^3e^{rx} $ \
$ e^{rx}(r^3 - 3r - 2) = 0 $ \
$ r^3 -3r - 2 = 0 $ \
$ r^3 - r - 2r - 2 = 0 $ \
$ r(r^2 - 1) - 2(r+ 1) = 0 $ \
$ (r+1)[r(r-1) - 2] = 0 $ \
$ (r+1)(r^2 - r - 2) = 0 $ \
$ \Delta = 1 + 8 = 9 $ \
$ r_1 = -1 $; $ r_{2,3} = \frac{1 \pm 3}{2} = \begin{cases}2 \cr -1 \end{cases} $ \
$ r_1 = r_2 = -1 $; $ r_3 = 2 $ \
$ y_1 = e^{-x} $; $ y_2 = xe^{-x} $; $ y_3 = e^{2x} $ \
$ \boxed{
  y_o = C_1e^{-x} + C_2xe^{-x} + C_3e^{2x}
}$ 