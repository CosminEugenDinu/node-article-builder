# Ecuatii diferentiale liniare, de ordinul 1. Aplicatii
### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 21.11.2021 

(1) $ y' + y = 2e^x $; Solutia generala si solutia problemei Cauchy $ y(0) = 1 $. \
**Algoritmul**\
**Etapa 1** Se determina solutia generala a ecuatiei omogene asociate: $y' + y = 0 $ =
ecuatie cu variabile separabile: \
$ y' = -y $; $ \frac{y'}{y} = -1 $; $\int{\frac{y'}{y}}dx = -\int{1}dx $ \
$ ln(y) = -x + ln(C) $ <=> $ y = e^{-x + ln(C)} $; $ y = e^{-x} \cdot e^{ln(C)}$ => \
$ y = C \cdot e^{-x} $ -> solutia generala a ecuatiei omogene.

**Etapa 2** Se aplica metoa variatiei constantelor (Lagrange) pentru determinarea unei
solutii particulare pt ecuatia neomogena. \
Se presupune ca $ C = C(x) $ si se pune conditia ca aceasta functie sa verifice ec.
neomogena $ y(x) = C(x) \cdot e^{-x} $ => $ y' = C'(x) \cdot e^{-x} - C(x) e^{-x} $ \
$ C'(x) e^{-x} -\cancel{C(x)}e^{-x} +\cancel{C(x)}e^{-x} = 2e^x $ \
$ C'(x) e^{-x} = 2e^x | \cdot e^x $; $ C'(x) = 2e^{2x} $; $ C(x) = 2\int{e^{2x}}dx $ \
$ C(x) = 2 \cdot \frac{e^{2x}}{2} + K $; \
$ C(x) = K + e^{2x} $ \
$ y = C(x) e^{-x} $ => $ y = (K + e^{2x}) e^{-x} $; \
$ y = Ke^{-x} + e^x $ \
$ y_o = K e^{-x} $; $y_p(x) = e^x $ \
$ y = y_o + y_p $ \
**Problema Cauchy**: $ x_0 = 0 $ => $ y(0) = 1 $ \
$ y(0) = K + 1 = 1 $ => $ K = 0 $ => \
$ y = e^x $

**Problema 2** \
$ y' + 2 + y = x^3 $ si solutia problemei Cauchy $ y(0) = \frac{e-1}{2} $. \

(1) Ec. omogena asociata: $ y' + 2xy = 0 $ -> ec. cu var. separabile \
$ y' = -2xy $; $\frac{dy}{dx} = -2xy $; $ \frac{dy}{y} = -2x \cdot dx $ \
$ \int{\frac{dy}{y}} = -2 \int{x}dx $; $ ln(y) = -2 \cdot \frac{x^2}{x} + ln(K) $ \
$ ln(y) = -x^2 + ln(K) $; $ y = e^{-x^2 + ln(K)} $; $ y = e^{-x^2} e^{ln(K)} $ \
$ y_o = K e^{-x^2} $ \
Din $ y' = -2xy $ => $ \frac{y'}{y} = -2x $ => $ \int{\frac{y'}{y}}dx = -\int{2x}dx $ \
$ ln(y) = -x^2 + ln(K) $

(2) Det. solutia particupara a ecuatiei neoogene $ y = K e^{-x^2} $; $ K = K(x) $ =>
$ y = K(x) e^{-x^2} $. Puntem conditia sa verifice ec. neomogena: \
$ y' = K'(x) e^{-x^2} - 2x K(x) e^{-x^2} $ \
$ K'(x) e^{-x^2} -\cancel{2xK(x)e^{-x^2}} + \cancel{2xK(x)e^{-x^2}} = x^3 $ \
$ K'(x) e^{-x^2} = x^3 | \cdot e^{x^2} $; $ K'(x) = x^3 e^{x^2} $; 
$ K(x) = \int{x^3 e^{x^2}}dx = \int{x^2 x e^{x^2}}dx $ 
$ = \frac{1}{2} \int{x^2 (x^2)' e^{x^2}}dx $. 
Facem schimbare de variabila \
$ x^2 = t $ => $ 2xdx = dt $; $ (x^2)'dx = dt $; $ I_t = \frac{1}{2} \int{t e^t}dt $ ->
prin parti
-----------------
Integrare prin parti:
$ \int{f(x)g'(x)}dx = f(x)g(x) - \int{f'(x)g(x)}dx $
---------------
$ f(t) = t $ => $ f'(t) = 1 $ \
$ g'(t) = e^t $ => $ g(t) = e^t $ => \
$ I_t = \frac{1}{2}\int{te^t}dt = \frac{1}{2}(te^t)dt = \frac{1}{2}(te^t - e^t) + C $;
$ I_x = K(x) = \frac{1}{2}(x^2 e^{x^2} - e^{x^2}) + C$ \
Dar $ y = K(x) e^{-x^2} $ \
$ y = \frac{1}{2}(x^2 - 1) + Ce^{-x^2} $ \
$ x = 0 $ => $ -\frac{1}{2} + C = \frac{e - 1}{2} $ => $ C = \frac{e}{x} $ \
=> $ y(x) = \frac{e}{x} e^{-x^2} + \frac{1}{2}(x^2 - 1) $


### Ecuatii diferentiale de ordinul 1, neliniare, reductibile la ecuatii liniare

**Ecuatia Bernoulli** \
Forma generala: $y' + P(x)y + Q(x)y^\alpha = 0 $ , $ \alpha \notin \\{0,1\\} $ . \
Daca $ \alpha = 0 $ => $ y' + P(x)y + Q(x) = 0 $ == ec. liniara si neomogena de ord. 1. \
Daca $ \alpha = 1 $ => $ y' + (P(x) + Q(x))y = 0 $ == ec. liniara si omogena de ord. 1. \
$P, Q : I \to \R $ continue pe intervalul $I$ .

**Rezolvare ecuatia Bernoulli** \
Daca $ \alpha > 0 $ => $ y = 0 $ este o solutie a ecuatiei.
Se va verifica daca este o solutie singulara sau particulara a ecuatiei.
In ipoteza $ y \ne 0 $ se imparte ecuatia la $ y^\alpha $
=> $ \frac{y'}{y^\alpha} + P(x)\frac{1}{y^{\alpha-1}} + Q(x) = 0 $ \
Se face **schimbarea de functie necunoscuta** $ z = \frac{1}{y^{\alpha-1}} $
=> $ z = y^{-(\alpha-1)} = y^{1-\alpha} $ \
$ z' = (1-\alpha)y^{1-\alpha-1} \cdot y' = (1-\alpha)y^{-\alpha} \cdot y' =
(1-\alpha)\frac{y'}{y^\alpha} $ \
=> $ \frac{y'}{y^\alpha} = \frac{z'}{1-\alpha} $ . \
Ecuatia devine: $ \frac{z'}{1 - \alpha} + P(x)z + Q(x) = 0 $ == ecuatie liniara si neomogena de ordinul 1 in functia necunoscuta $ z = z(x) $ \
=> $ z = Cf(x) + g(x) $ , dar $ z = \frac{1}{y^{\alpha-1}} = y^{1-\alpha} $ \
=> $ y = z \frac{1}{1-\alpha} $ ; $ z \frac{1}{1-\alpha} = (y^{1-\alpha})^{\frac{1}{1-\alpha}} = y $.

**Exemplu**
$ xy' - y - 3xy^3 = 0 $ \
(Trebuie verificat daca $ y = 0 $ este o solutie singulara sau particulara) \
Pentru $ y \ne 0 $ => $ \alpha = 3 $ => $ xy' - y - 3xy^3 = 0 | :y^3 $ \
$ \frac{xy'}{y^3} - \frac{1}{y^2} - 3x = 0 $ \
Se face **schimbarea de functie** $ z = \frac{1}{y^2} = y^{-2} $ . \
Derivam z in func de y: $ z' = -2y^{-2-1} \cdot y' = -2y^{-3}y' $ \
$ z' = -\frac{2}{y^3}y' | \cdot \frac{1}{2} $ => $ \frac{z'}{2} = -\frac{y'}{y^3} $ \
$
\begin{drcases}
  \frac{y'}{y^3} = -\frac{z'}{2} \cr
  z = \frac{1}{y^2} \cr
  \frac{xy'}{y^3} - \frac{1}{y^2} - 3x = 0
\end{drcases}
$
=> $ x(-\frac{z'}{2}) - z - 3x = 0 $ => $ xz' + 2z = -6x $ <=> ecuatie liniara si
si neomogena, de oridinul 1. \
$ z = z_o + z_p $ ;
$ \begin{cases}
z_o -> xz' + 2z = 0 \cr
z_p -> \text{sol. particulara a ec neomo}
\end{cases} $ \
$ xz' + 2z = 0 $; $ z' + \frac{2}{x} \cdot z = 0 $; $ \frac{z'}{z} = -\frac{2}{x} $ => 
$ ln(z) = -2ln(x) + ln(C) $; $ ln(z) = ln(x^{-2}) + ln(C) $; $ ln(z) = ln(\frac{C}{x^2}) $ <=> \
$ z_o = \frac{C}{x^2} $ \
Metoda variatiei constantelor: \
$ C = C(x) $ => $ z = \frac{C(x)}{x^2} $ => $ z' = \frac{C'(x)x^2 - 2xC(x)}{x^4} $;
$ z'(x) = \frac{C'(x)}{x^2} - 2 \frac{C(x)}{x^3} $; $ xz' + 2z = -6x $;
$ \frac{C'(x)}{x} - \cancel{2\frac{C(x)}{x^2}} + \cancel{2\frac{C(x)}{x^2}} = -6x | \cdot x $;
 $ C'(x) = -6x^2 $ => $ C(x) = \int{(-6x^2)}dx + K $; $ C(x) = K - \frac{x^3}{e} $ => 
 $ z = \frac{C(x)}{x^2} $ \
 $ z(x) = \frac{K}{x^2} - \frac{x}{x} $ \
 Dar $ z = \frac{1}{y^2} $ => $ y^2 = \frac{1}{z} $ \
 $ y^2 = \frac{1}{\frac{K}{x^2} - \frac{x}{x}} $

**Ecuatia Riccati** \
Forma generala:
$ y' + P(x)y^2 + Q(x)y + R(x) = 0 $ , $ P, Q, R : I \to \R $ ,
continue pe intervalul $I$ .
Solutia generala a acestei ecuatii nu se poate obtine prin integrari de functii
elementare. Totusi solutia sa generala se poate obtine daca se cunosca:
- (1) $y_1$ o solutie particulara a ecuatiei
 => schimbare de functie: $ y = y_1 \plusmn \frac{1}{z} $
- (2) $y_1, y_2$ doua solutii particulare ale ecuatiei
=> schimbare de functie: $ z = \frac{y-y_1}{y-y_2} $
- (3) trei solutii particulare ale ecuatiei

(1) Daca se cunoaste o solutie particulara $ y_1(x) $ a ecuatiei =>
$ y'_1 + P(x)y^2_1 + Q(x)y_1 + R(x) = 0 $, $ \forall x \in \hat{I} $. \
Se recomanda schimbare de functie prin relatia: $ y = y_1 \pm \frac{1}{z} $
(de preferinta $ y = y_1 - \frac{1}{z} $), unde $ z $ = ... functie necunoscuta. \
$ y' = y'_1 + \frac{z'}{z^2} $; $ y^2 = y^2_1 - 2\frac{y'}{z} + \frac{1}{z^2} $; 
$ y'_1 + \frac{z'}{z^2} + P(x)(y_1^2 - 2\frac{y_1}{z} + \frac{1}{z^2}) + Q(x)(y_1 - \frac{1}{z}) + R(x) = 0 $;
<!-- $ \underbrace{y_1' + P(x)y^2_1 + Q(x)y_1 + R(x)}_{\equiv 0} + \frac{z'}{z^2} - 2P(x)\frac{y'}{z} - Q(x) \frac{1}{z} + \frac{P(x)}{z^2} \equiv 0 $ =>  -->
$ \underline{y_1' + P(x)y^2_1 + Q(x)y_1 + R(x)} + \frac{z'}{z^2} - 2P(x)\frac{y'}{z} - Q(x) \frac{1}{z} + \frac{P(x)}{z^2} \equiv 0 $ => 
$ z' - (2P(x)y_1 + Q(x))z + P(x) \equiv 0 $ = ecuatie dif liniara si neomogena in functia necunoscuta $ z $. \
=> $ z(x) = C \cdot \varphi(x) + \psi(x) $ => $ y(x) = y_1 - \frac{1}{z} $ \
$ y(x) = y_1(x) - \frac{1}{C \varphi(x) + \psi(x)} $.

**Exemplu** Sa se integreze ecuatia: \
$ x^2y' + x^2y^2 + xy - 4 = 0 |: x^2 $ cautand o solutie arbitrara de forma $ y_1 = \frac{a}{x_a}$ \
$ y' + y^2 + \frac{y}{x} - \frac{4}{x^2} = 0 $;
$ y' = -\frac{a}{x^2} $; $ y^2 = \frac{a^2}{x^2} $; $ \frac{y}{x} = \frac{a}{x^2} $;
$ -\cancel{\frac{a}{x^2}} + \frac{a^2}{x^2} + \cancel{\frac{a}{x^2}} - \frac{4}{x^2} = 0 | \cdot x^2 $ =>
$ a^2 - 4 = 0 $ => $ a = \pm 2 $; $ y_1 = -\frac{2}{x} $; \
Facem schimbare de functie $ y = y_1 - \frac{1}{z} $ \
$ y = - \frac{2}{x} - \frac{1}{z} $ => $ y' = \frac{2}{x^2} + \frac{z'}{z^2} $;
$ \cancel{\frac{2}{x^2}} + \frac{z'}{z^2} + \cancel{\frac{4}{^2}} + \frac{4}{xz} + \frac{1}{z^2} - \cancel{\frac{2}{x^2}} - \frac{1}{xz} - \cancel{4}{x^2} = 0 $ \
$ \frac{z'}{z^2} + \frac{3}{xz} + \frac{1}{z^2} = 0 | \cdot z^2 $ => \
$ z' + \frac{3}{x}\cdot z + 1 = 0 $ \
$ z = z_o + z_p $ \
Ecuatia omogena: $ z' + \frac{3}{x}z = 0 $; $ \frac{z'}{z} = - \frac{3}{x} $;
$ ln(z) = -3ln(x) + ln(C) $; $ ln(z) = ln(\frac{C}{x^3}) $ => \
$ z_o = \frac{C}{x^3} $. Ecuatia omogena. \
$ C(x) = C $; $ z = \frac{C(x)}{x^3} $ => $ z' = \frac{C'(x)x^3 - 3x^2C(x)}{x^6} $;
$ z'(x) = \frac{C'(x)}{x^3} - 3 \cdot \frac{C(x)}{x^4} $. Punem conditia sa verifice
ecuatia neomogena. \
$ \frac{C'(x)}{x^3} - 3 \cdot \cancel{\frac{C(x)}{x^4}} + \cancel{\frac{3}{x} \cdot \frac{C(x)}{x^3}} + 1 = 0 $ => $ C'(x) + x^3 = 0 $;
$ C'(x) = -x^3 $ => $ C(x) = -\int{x^3}dx + K $; \
$ C(x) = K - \frac{x^4}{4} $ \
$ z = \frac{C(x)}{x^3} $; $ z(x) = \frac{K}{x^3} - \frac{x}{4} $ \
$ z(x) = \frac{4K - x^4}{4x^3} $ \
$ y = -\frac{2}{x} - \frac{1}{z} $; $ y = -\frac{2}{x} - \frac{4x^3}{4K-x^4} $

(2) Daca se cunoaste o clasa solutii particulare ale ecuatiei Riccati $ y_1 $ si $y_2$, 
se recomanda schimbare de functie $ z = \frac{y-y_1}{y-y_2} $, $ z $ = functie necunoscuta. \
Se va obtine o ecuatie liniara si omogena in functia z:
$ z' + P(x)(y_1(x) y_2(x))z = 0 $ => $ \frac{z'}{z} = -P(x)(y_1-y_2) $;
$ ln(z) = \int{P(x)(y_2-y_1)}dx + ln(C) $ => \
$ z = C \cdot e^{\int{P(x)(y_2-y_1)}dx} $

**Aplicatie**\
$ x^2y' + (xy - 2)^2 = 0 $ \
$ x^2y' + x^2y^2 - 4xy + 4 = 0 $ -> se cauta solutii de forma $ y = \frac{\alpha}{x} $ =>\
$ y_1 = \frac{1}{x} $; $ y_2 = \frac{4}{x} $ \
$ z = \frac{y - \frac{1}{x}}{y - \frac{4}{x}} $ ... etc. => ec. lin. si omogena. \
$ \begin{rcases}
\text{Sau:} y = \frac{1}{x} - \frac{1}{z} \cr
\text{sau:} y = \frac{4}{x} - \frac{1}{z}
\end{rcases} $ -> ec. liniara si neomogena in functia z.

### Ecuatii diferentiale liniare, de ordinul n, omogene si neomogene, cu coeficienti constanti

**(I) Forma generala:**

(1) $ a_0y^{(n)} + a_1y^{(n-1)} + a_2y^{(n-2)} + ... + a_{n-1}y' + a_ny = f(x) $,
$ a_i, i = \overline{a,n} $ sunt constante iar $ f: \hat{I} \to \R $ continua.

**(II) Teorema** Solutia generala a ecuatiei (1) este suma intre solutia generala a ecuatiei omogene asociate si o solutie particulara a ecuatiei omogene. \
Fie $ A_n $ urmatorul operator diferential de ordinul n: \
$ a_0\frac{d^n}{dx^n} + a_1\frac{d^{n-1}}{dx^{n-1}} + ... + a_{n-1}\frac{d}{dx} + a_n = An $ \
$A_n(y) = a_0\frac{d^ny}{dx^n} + a_1\frac{d^{n-1}y}{dx^{n-1}} + ... + a_{n-1}\frac{dy}{dx} + a_ny $, unde $ \frac{d^ky}{dx^k} = y^{(k)} $ \
Cu ajutorul lui $A_n$, ecuatia (1) se scrie: \
(1) $ A_n(y) = f(x) $ \
iar ecuatia omogena asociata se scrie: \
(2) $ A_n(y) = 0 $.

**(III) Structura generala** a multimii solutiilor ecuatiei omogene asociate \
Multimea solutiilor ecuatiei omogene de ordinul n, cu coeficienti constanti, $ A_n(y) = 0 $
are o structura de spatiu vectorial de dimensiune n (n = ordinul ecuatiei) peste corpul $\R$ sau $\Complex$. \
O baza a acestui spatiu este formata din n solutii liniar independente ale ecuaiei omogene $A_n(y) = 0$. \
$ B = \\{y_1, y_2, ..., y_n\\} $; $ A_n(y_i) = 0 $, $ \forall i = \overline{1,n} $. \
Independenta liniara a acestor solutii se verifica prin condintia urmatoare: \
$ w(y_1, y_2, ..., y_n) = 
\begin{vmatrix}
y_1 & y_2 & y_3 & ... & y_n \cr
y_1' & y_2' & y_3' & ... & y_n' \cr
... & ... & ... & ... & ... \cr
y_1^{(n-1)} & y_2^{(n-1)} & y_3^{(n-1)} & ... & y_n^{(n-1)}
\end{vmatrix}
\ne 0 $ pe  $\hat{I}$. \
Acest determinant se numeste determinantul lui Wronsky sau wronkskianul celor n solutii. \
Daca se cunoaste o baza a spatiului solutiilor ecuatiei omogene $ A_n(y) = 0 $ atunci 
solutia generala a acestei ecuatii este
$ y_o = C_1y_1 + C_2y_2 + ... + C_ny_n $, $ C_i, i = \overline{1,n} $
sunt n constante arbitrare. \
Pentru ecuatiile cu coeficienti constanti se poate determina intotdeauna o baza a spatiului solutiilor, dupa o idee a lui Euler, cautand solutii de forma $ y= e^r $
unde r urmeaza a fi determinat. \
De asemenea, daca se da un sistem de n functii liniar independente, adica cu repr: \
$ w(y_1, y_2, ..., y_n) \ne 0 $ pe $ \hat{I} $, atunci se poate determina ecuata 
diferentiala omogena si liniara, de ordinul n, care admite aceste n functii drept sistem
fundamental de solutii. Ideea are la baza faptul ca intr-un spatiu vectorial de dimensiune
n, (n+1) solutii vor fi liniar dependente, adica 
$ w(y_1, y_2, ..., y_n) \equiv 0 $.

**Aplicatii** \
(1) Sa se construiasca ecuatiile diferentiale liniare si omogene, de sistem fundamental precizat: \
(a) $ B = \\{sin(x), cos(x)\\} $ \
(a1) Verificam independenta solutiilor: \
$ w(sin(x), cos(x)) \ne 0 $;
$ w(y_1, y_2) = 
\begin{vmatrix}
y_1 & y_2 \cr
y_1' & y_2'
\end{vmatrix} =
\begin{vmatrix}
sin(x) & cos(x) \cr
cos(x) & -sin(x)
\end{vmatrix} = 
-sin^2(x) - cos^2(x) = -1 \ne 0 $ => solutiile sunt independente. \
(a2) Ecuatia cautata se obtine din conditia: \
$ w(y, y_1, y_2) = 0 $ <=>
$ \begin{vmatrix}
y & sin(x) & cos(x) \cr
y' & cos(x) & -sin(x) \cr
y'' & -sin(x) & -cos(x)
\end{vmatrix} = 0 $ \
$ y'' \cdot (-1)^{1+3} \cdot 
\begin{vmatrix}
sin(x) & cos(x) \cr
cos(x) & -sin(x)
\end{vmatrix} + y' \cdot (-1)^{1+2} \cdot
\begin{vmatrix}
sin(x) & cos(x) \cr
-sin(x) & -cos(x)
\end{vmatrix} + y \cdot (-1)^{1+1} \cdot
\begin{vmatrix}
cos(x) & -sin(x) \cr
-sin(x) & -cos(x)
\end{vmatrix} = 0 $ \
$y''(-1) + 0 + y(-1) = 0$ \
$y'' + y = 0 $ \
Solutia generala a ecuatiei este: \
$ y = C_1y_1 + C_2y_2 $; $ y_o = C_1sin(x) + C_2cos(x) $.

(2) $ B = \\{e^x, e^{-x}, e^{2x} \\}  $ \
(a1): $ w(e^x, e^{-x}, e^{2x}) \ne 0 $ \
(a2): $ w(y, e^x, e^{-x}, e^{2x}) = 0 $

### (2) Determinarea sistemului fundamental de solutii pentru ecuatia liniara si omogena de ordinul n cu coeficienti constanti

$ A_n(y) = 0 $ <=> 
$ a_0y^{(n)} + a_1y^{(n-1)} + ... + a_{n-1}y' + a_ny = 0 $ \
Dupa o idee a lui Euler cautam solutii de forma $ y = e^{rx} $; $ r = \text{ct} \in \R $.\
$ y' = re^{rx} $; $ y'' = r^2e^{rx} , ..., y^{(n)} = r^ne^{rx} $ \
Ecuatia devine: \
$ a_0 r^n e^{rx} + a_1 r^{n-1} e^{rx} + ... + a_{n-1} r e^{rx} + a_n e^{rx} = 0 $, 
$ e^{rx} \ne 0 $ => \
$ a_0r^n + a_1r^{n-1} + ... + a_{n-1} r + a_n = 0 $ => o ecuatie polinomiala de gradul n,
$ a_i \in \R$ se numeste ecuatie caracteristica a ecuatiei diferentiale.

Ecuatia are exact $ n $ radacini.

**Cazuri posibile**

(1) $ r_1 \ne r_2 \ne ... \ne r_n $; $ r_i \in \R$, $\forall i = \overline{1,n} $. \
Fiecarei radacini a ecuatiei caracteristice ii corespunde o solutie a ecuatiei diferentiale in sistemul fundamental de solutii. \
$ r = r_i \to y_i = e^{r_ix} $, $ i = \overline{1,n} $ => 
$ B = \\{ e^{r_1x}, e^{r_2x}, ..., e^{r_nx} \\} $ \
$ w(e^{r_1x}, e^{r_2x}, ..., e^{r_nx}) \ne 0 $ pe $\R$. \
-> Solutia generala a ecuatiei omogene $ A_n(y) = 0 $: \
$ y = C_1e^{r_1x} + C_2e^{r_2x} + ... + C_ne^{r_nx} $ .

(2) $ r = r_1 $ -> radacina multipla de ordinul $k_1$.\
Se demonstreaza ca acestei radacini ii vor corespunde urmatoarele $k_1$ solutii in sistemul fundamental: \
$ y_1 = e^{r_1x} $; $ y_2 = xe^{r_1x} $; $ y_3 = x^2e^{r1x}, ..., y = x^{k_1-1} e^{r_1x} $. \
Analog pentru fiecare alta radacina reala si multipla a ecuatiei caracteristice.

(3)
$ \begin{cases}
r_1 = \alpha + i\beta \cr
r_2 = \alpha - i\beta
\end{cases} $ -> radacini complexe conjugate simple ale ec. caracteristice. \
Se dem. ca acestora le corespund urmatoarele solutii in sist. fundamental de solutii ale ec. diferentiale: \
$ \begin{cases}
y_1 = e^{\alpha x} \cdot cos(\beta x) \cr
y_2 = e^{\alpha x} \cdot sin(\beta x)
\end{cases} $

(4)
$ \begin{cases}
r_1 = \alpha + i \beta \cr
r_2 = \alpha - i \beta
\end{cases} $ -> radacini complex conjugate multiple, de ordinul **k**. \
=>
$ \begin{cases}
y_{11} = e^{\alpha x} cos(\beta x), y_{12} = x e^{\alpha x} cos(\beta x), ..., y_{1k} = x^{k-1}e^{\alpha x} cos(\beta x) \cr
y_{21} = e^{\alpha x} sin(\beta x), y_{22} = x e^{\alpha x} sin(\beta x), ..., y_{2k} = x^{k-1}e^{\alpha x} sin(\beta x)
\end{cases} $. 

**Exemple** Sa se determine solutia generala a ecuatiilor diferentiale:

(1) $ y'' + y = 0 $, $ y = e^{rx} $ => \
$ y' = re^{rx} $; $y'' = r^2e^{rx} $ => $ (r^2 + 1)e^{rx} = 0 | : e^{rx} $ =>
$ r^2 + 1 = 0 $; $r_{1,2} = \pm i $; $ r_{1,2} = 0 \pm i $; $ \alpha = 0$; $ \beta = 1 $ \
=>
$ \begin{cases}
y_1 = e^{0 \cdot x}  cos(x) \cr
y_2 = e^{0 \cdot x} sin(x) 
\end{cases} $;
$ \begin{cases}
y_1 = cos(x) \cr
y_2 = sin(x) 
\end{cases} $;
$ B = \\{ cos(x), sin(x) \\} $ \
$ y = C_1y_1 + C_2y_2 $; $ y = C_1cos(x) + C_2sin(x) $

(2) $ y'' - 5y' + 6y = 0 $; $ y = e^{rx} $ \
$ r^2 - 5r + 6 = 0 $; $ \Delta = b^2 - 4ac = 25 - 24 = 1 $ \
$ r_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2} = \frac{5 \pm 1}{2}$ \
$ \begin{cases}
r_1 = 2 \cr
r_2 = 3
\end{cases} $ => 
$ \begin{cases}
y_1 = e^{2x} \cr
y_2 = e^{3x}
\end{cases} $ => \
$ y_o = C_1e^{2x} + C_2e^{3x} $.

Sa se determine si solutia problemei Cauchy care verifica urmatoarele conditii initiale: \
$ \begin{cases}
y(0) = 0 \cr
y'(0) = 1
\end{cases} $ \
$ y'(x) = 2C_1e^{2x} + 3C_2e^{3x} $ \
$ \begin{cases}
y(0) = C_1 + C_2 = 0 => C_1 = -C_2 \cr
y'(0) = 2C_1 + 3C_2 = 1
\end{cases} $ \
=> $ C_2 = 1 $ => $ C_1 = -1 $ => \
$ y = -e^{2x} + e^{3x} $

(3) $ y''' - 6y'' + 12y' - 8y = 0 $; $y = e^{rx} $ => \
$ r^3 - 6r^2 + 12r - 8 = 1 $ => $ r_1 = r_2 = r_3 = 2 $ \
=> $ y_1 = e^{2x} $; $ y_2 = xe^{2x} $; $y_3 = x^2e^{2x} $ (Horner) \
$ y = C_1e^{2x} + C_2xe^{3x} + C_3x^2e^{2x} $.
