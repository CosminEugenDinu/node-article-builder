### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 21.10.2021 

## Ecuatii diferentiale liniare, de ordinul 1, omogene si neomogene

**Forma generala:** $ y' + P(x)y + Q(x) = 0 $ (1), unde $ P, Q : \hat{I} \to \R $
functii continue. 

Ec. n.n. liniara pt ca functia necunoscuta $ y $ si derivata sa $ y' $ apar in ecuatie la puterea 1. 

Daca $ Q(x) \ne 0 $ ecuatia se numeste neomogena.

$ y' + P(x)y = 0 $ (2) = ecuatie liniara si omogena atasata ecuatiei neomogene (1).

**Teorema** Solutia generala a ecuatiei diferentiale liniare si neomogene de ordinul intai
este suma dintre solutia generala a ecuatiei omogene atasate si o solutie particulara a 
ecuatiei neomogene.

**Dem** Ecuatia liniara, neomogena, de ordinul 1 \
$ y' + P(x)y + Q(x) = 0 $ (1). \
Ecuatia liniara ssi omogena de ordinul 1 atasata ecuatiei (1): $ y' + P(x)y = 0 $ (2). \
Fie $ y_p : \hat{I} \to \R $ o solutie particulara a ecuatiei neomogene (1) => \
$ y_p'(x) + P(x)y_p(x) + Q(x) \equiv 0 $. \
Fie si $ y $ = sol. generala a ecuatiei omogene (2). \
Consideram functia $ z = y + y_p $ => \
$ z' = y' + y_p' $ \
$ \frac{dz}{dx} + P(x)z + Q(x) = y' + y_p' + P(x)(y+y_p) + Q(x) =
\underline{y' + P(x)y} +
\underline{y_p' + P(x)y_p + Q(x)} = 0 + 0 = 0 $

**Consecinta** Algoritmul general de integrare a ecuatiei (1) (liniara si neomogena) are
2 etape esentiale:
- (a) determinarea solutiei generala a ecuatiei omognene asociate: $ y' + P(x)y = 0 $ (2).
- (b) determinarea unei solutii particulare a ecuatiei neomogene (1): $ y' + P(x)y + Q(x) = 0 $.

Uneori se cere si determinarea solutiei problemei Cauchy care pentru $ x = x_0 \in \hat{I} $
sa ia valoarea $ y_0 = y(x_0) $ <=> graficul solutiei problemei (1) sa treaca prin punctul
$ A(x_0, y_0). Impunand aceasta conditie solutiei generala se va determina valoarea
**unica** a constantei **C**.

**Rezolvare**\
(a) - asociem ecuatia omogena: $ y' + P(x)y = 0 $ = o ecuatie cu variabile separabile: 
$ (ln(y))' = \frac{y'}{y} $ \
$ y' = -P(x)y $ <=> $ \frac{y'}{y} = - P(x) $ => \
$ \int{\frac{y'}{y}}dy = -\int{P(x)}dx + K $ => 
$ ln|y| = -\int{P(x)}dx + K $ =>  $ |y| = e^{-\int{P(x)}dx + K} $;
$ |y| = e^{-\int{P(x)}dx} \cdot e^K $ => \
[$ y = C \cdot e^{-\int{P(x)}dx} $] -> **solutia generala a ecuatiei omogene asociate**.

**Rezolvare2** - mai simplu: \
$ \int{\frac{y'}{y}}dy = -\int{P(x)}dx $ => $ ln(y) = -\int{P(x)}dx + ln(C) $ =>
$ y = e^{-\int{P(x)}dx + ln(C)} $ => $ y = e^{-\int{P(x)}dx} \cdot e^{ln(C)}$ \
[$ y = C \cdot e^{-\int{P(x)}dx} $]

**Exemplu (1)** \
$ y' + \frac{y}{x-2} = 0 $, $ x \in \R \setminus \\{ 2 \\} $ \
$ y' = - \frac{y}{x-2} $; $ \frac{y'}{y} = -\frac{1}{x-2} $ => \
$ \int{\frac{y'}{y}}dy = -\int{\frac{1}{x-2}}dx $ \
$ ln|y| = -ln|x-2| + lnC $; $ ln|y| = ln\frac{C}{|x-2|} $ => 
$ |y| = \frac{C}{|x-2|} $ <=>
$ \boxed{y = \frac{C}{x-2}} $

**Exemplu (2)** \
$ 3y'(x^2 - 1) - 2xy = 0 $ \
$ 3y'(x^2 - 1) = 2xy $ \
$ 3 \frac{y'}{y} = \frac{2x}{x^2 - 1} $ => \
$ 3 ln(y) = ln(x^2 - 1) + ln(C) $ \
$ ln(y) = \frac{1}{3} ln(x^2-1) + \frac{1}{3} ln(C) $ \
$ ln(y) = ln[(x^2-1)^{\frac{1}{3}} C^{\frac{1}{3}}] $ \
$ ln(y) = ln(K \sqrt[3]{x^2 - 1}) $ <=>
$ \boxed{ y = K \sqrt[3]{x^2 -1} } $ - solutia generala a ecuatiei omogene date.

(b) Determinarea unei solutii particulare pentru ecuatia neomogena.

Metoda generala pt rezolvarea acestei probleme este datorata lu Lagrange si se numeste
metoda **"constantelor variabile"** sau a **variatiei constantelor**.

- se porneste de la solutia generala a ecuatiei omogene asociate ($ y' + P(x)y = 0 $): \
$ y = C \cdot e^{-\int{P(x)}dx} $ 

- se presupune ca $C$ nu este constanta ci este functie tot de variabila $ x $ ($ C = C(x) $)
si se pune conditia ca $ y = C(x) \cdot e^{-\int{P(x)}dx} $ sa verifice ecuatia neomogena
initiala ( $ y' + P(x)y + Q(x) \equiv 0 $) \
$ y' = C'(x) e^{-\int{P(x)}dx} + C(x) (e^{-\int{P(x)}dx})' $
$ \boxed{(e^{u(x)})' = e^{u(x)} \cdot u'(x)}$ \
$ y' = C'(x) e^{-\int{P(x)}dx} + C(x) e^{-\int{P(x)}dx} \cdot (-P(x)) $ \
$ y' = C'(x) e^{-\int{P(x)}dx} - C(x) P(x) e^{-\int{P(x)}dx} $ \
Inlocuim in ecuatia neomogena: \
$ C'(x) e^{-\int{P(x)}dx} - \cancel{P(x)C(x)e^{-\int{P(x)}dx}} + \cancel{P(x)C(x)e^{-\int{P(x)}dx}} + Q(x) = 0 $ \
$ C'(x) e^{-\int{P(x)}dx} = -Q(x) | \cdot e^{-\int{P(x)}dx} $ \
$ \boxed{C'(x) = -Q(x) \cdot e^{\int{P(x)}dx}} $ => \
$ C(x) = -\int{Q(x)e^{\int{P(x)}dx}}dx + K $ \
Inlocuim in solutia generala a ecuatiei omogene => \
$ y = e^{-\int(P(x))dx} C(x) = e^{-\int(P(x))dx} (K - \int(Q(x)e^{\int(P(x))dx})dx)$ = solutia generala a ecuatiei neomogene. \
$ \boxed{
  y = e^{-\int(P(x))dx} (K - \int(Q(x)e^{\int(P(x))dx})dx)
} $ solutia generala a ecuatiei liniare si neomogene

$ y = \underline{K e^{-\int(P(x))dx}} - \underline{e^{-\int(P(x))dx} \int(Q(x)e^{\int(P(x))dx})dx} $ 

$ \boxed{
  y_o = K e^{-\int(P(x))dx}
} $ = **solutia generala** a ecuatiei omogene asociate

$ \boxed{
  y_p(x) = -e^{-\int(P(x))dx} \int(Q(x) e^{\int(P(x))dx})dx
} $ = **solutia particulara** a ecuatiei neomogene determinata prin metoda variatiei constantelor (Lagrange)

**De remarcat**
- (1) In ecuatia obtinua pt $C'(x) $ termenii care contin pe $ C(x) $ **se reduc**.
- (2) Pt obtinerea solutiei generala a ecuatiei omogene asociate a fost necesara o singura
operatie de calcul a unei primitive: $ e^{-\int(P(x))dx} $; $ y_o = C e^{-\int(Px)dx} $.
- (3) Pentru obtinerea solutiei generala a ecuatiei neomogene sunt necesare doua operatii
de calcul a doua primitive: $ e^{-\int(P(x))dx} $; $ \int(Q(x)e^{\int(P(x))dx})dx $.

**Aplicatii**

(1) $ y' + y = 2e^x $, $ y(0) = 1 $ (Cauchy) \
- (a) Ecuatia omogena asociata: $ y' + y = 0 $ \
$ y' = -y $ \
$ \frac{y'}{y} = -1 $ => \
$ ln(y) = -x + ln(C) $ \
$ y = e^{-x + ln(C)} $ \
$ y = e^{-x} e^{ln(C)} $ \
$ \boxed{
  y_o = C e^{-x}
} $

- (b) Solutia particulara a ecuatiei neomogene (Lagrange). \
Presupunem ca $ C = C(x) $ si punem conditia sa verifice ecuatia initiala \
$ y' = (C(x)e^{-x})' = C'(x)e^{-x} - C(x)e^{-x} $ => \
$ C'(x)e^{-x} - \cancel{C(x)e^{-x}} + \cancel{C(x)e^{-x}} = 2e^x $ => \
$ C'(x) e^{-x} = 2e^x $ \
$ C'(x) = 2e^{2x} $ \
$ C(x) = \int(2e^{2x})dx = 2 \int(e^{2x})dx = 2 \frac{e^{2x}}{2} + K = $ \
$ = \boxed{
  e^{2x} + K = C(x)
} $ => \
$ y = C(x)e^{-x} $ \
$ y = (K + e^{2x})e^{-x} $ \
$ \boxed{
  y = Ke^{-x} + e^x
} $ \
$ y_o = Ke^{-x} $ \
$ y_p(x) = e^x $ \
$ y_p = e^x $ => \
$ y_p' + y_p = e^x + e^x = 2e^x $ => \
$ \boxed{
  y(x) = Ke^{-x} + e^x
  } $ \
$ y(0) = 1 $ \
$ K + 1 = 1 $ \
$ K = 0 $ \
$ \boxed{
  y = e^x
} $

(2) $ y' + 2xy - x^3 = 0 $. Solutia problemei Cauchy $ y(0) = \frac{e-1}{2} $. \
(a) Ecuatia omogena: $ y' + 2xy = 0 $ \
$ y' = -2xy $ \
$ \frac{y'}{y} = -2x $ \
$ ln(y) = -2\int(x)dx + ln(C) $ \
$ ln(y) = -x^2 + ln(C) $ \
$ y = e^{-x^2 + ln(C)} $ \
$ y = e^{ln(C)}e^{-x^2} $ \
$ \boxed{
  y_o = Ce^{-x^2}
} $ \
(b) $ C =C(x) $ => $ y = C(x) e^{-x^2} $ \
$ y' = C'(x)e^{-x^2} - C(x)2xe^{-x^2} $ \
$ C'e^{-x^2} - \cancel{2xC(x)e^{-x^2}} + \cancel{2xC(x)e^{-x^2}} = x^3 $ \
$ C'(x)e^{-x^2} = x^3 $ \
$ C'(x) = x^3e^{x^2} $ => \
$ C(x) = \int(x^3e^{x^2})dx $ \
$ C(x) = \int(xx^2e^{x^2})dx $ \
$ C(x) = \frac{1}{2}\int(x^2 \cdot 2xe^{x^2})dx $ \
$ x^2 = t $ => $ 2xdx = dt $ => \
$ C(t) = \frac{1}{2}\int(te^t)dt $ \
$ \boxed{
  \int(f(t) \cdot g'(t))dt = f(t)\cdot g(t) - \int(f'(t)\cdot g(t))dt
} $ - formula integrare prin parti \
$
\begin{rcases}
\int(e^t)dt \cr
\begin{cases}
f(t) = t => f'(t) = 1 \cr
g'(t) = e^t => g(t) = \int(e^t)dt = e^t
\end{cases}
\end{rcases}
$ => \
$ \int(te^t)dt = te^t - \int(1e^t)dt = te^t - e^t $ \
$ C(t) = \frac{1}{2} \int(te^t)dt = \frac{1}{2}(te^t - e^t) $ \
$ C(x) = \frac{1}{2}(x^2e^{x^2} - e^{x^2}) + K $ \
$ \boxed{
  C(x) = \frac{1}{2}e^{x^2} (x^2 - 1) + K
} $ \
$ y_o = C(x) e^{-x^2} $ => \
$ y = [\frac{1}{2}e^{x^2} (x^2 - 1) + K]e^{-x^2} $ \
$ \boxed{
  y(x) = Ke^{-x^2} + \frac{1}{2}(x^2 - 1) 
} $ \
$ y_o = Ke^{-x^2} $ \
$ y_p = \frac{1}{2}(x^2 - 1) $ \
$ y(0) = \frac{e-1}{2} $ - conditia initiala Cauchy \
$ y(0) = K - \frac{1}{2} = \frac{e-1}{2} $ -> $ K = \cancel{\frac{1}{2}} + \frac{e}{2} - \cancel{\frac{1}{2}} $ = \
$ = \boxed{
  \frac{e}{2} = K
} $ => \
$ \boxed{
  y(x) = \frac{e}{2} e^{-x^2} + \frac{1}{2}(x^2 - 1)
} $ - **solutia problemei Cauchy**


### Ecuatii diferentiale de ordinul 1 neliniare, reductibile la ecuatii liniare

**(1) Ecuatia lui Bernoulli**

**Forma generala**: $ y' + P(x)y + Q(x)y^{\alpha} = 0 $, $ \alpha \in \\{ 0, 1 \\} $. \
Daca $ \alpha = 0 $ => $ y' + P(x)y + Q(x) = 0 $ = ecuatie liniara si neomogena,
de ordinul 1 (studiata).

Daca $ \alpha = 1 $ => $ y' + (P(x) + Q(x))y = 0 $ = ecuatie liniara si omogena,
de ordinul 1 (studiata).

$ P, Q : \hat{I} \to \R $ continue pe intervalul $ \hat{I} $ .

**Rezolvare** In ipoteza $ y \ne 0 $, se imparte cu $ y^{\alpha} $ => \
$ \frac{y'}{y^{\alpha}} + P(x) \frac{y}{y^{\alpha}} + Q(x) = $ \
$ \frac{y'}{y^{\alpha}} + P(x)(\frac{1}{y^{\alpha - 1}}) + Q(x) = 0 $ \
Se face schimbarea de functie necunoscuta $ z = \frac{1}{y^{\alpha - 1}} $ \
$ z = y^{1 - \alpha} $ \
$ z' = (1 - \alpha)y^{-\alpha}y' $ \
$ z' = (1 - \alpha)\frac{y'}{y^{\alpha}} $ \
$ \frac{y'}{y^{\alpha}} = \frac{z'}{1-\alpha} $ . Ecuatia devine: \
$ \frac{z'}{1-\alpha} + P(x)z + Q(x) = 0 $ = ecuatie liniara de ordinul 1, neomogena => \
$ z = Cf(x) + g(x) $ \
Dar $ z = \frac{1}{y^{\alpha - 1}} $; $ z = y^{1-\alpha} $ \
Dar $ z = Cf(x) + g(x) $ => \
$ y^{1-\alpha} = Cf(x) + g(x) $ \
$ y = (Cf(x) + g(x))\frac{1}{1-\alpha} $

**Exemplu (1)** \
$xy' - y = 3xy^3 = 0 $, $ \alpha = 3 $ \
Pentru $ y \ne 0 $.
(Trebuie verificat daca $ y = 0 $ este o solutie singulara sau particulara) \
Pentru $ y \ne 0 $ => $ \alpha = 3 $ \
- Se imparte ecuatia cu $ y^3 $ \
  $ xy' - y - 3xy^3 = 0 | :y^3 $ \
  $ \frac{xy'}{y^3} - \frac{1}{y^2} - 3x = 0 $
- Se face **schimbarea de functie** \
  $ z = \frac{1}{y^2} = y^{-2} $ .
- Derivam z in func de y: \
  $ z' = -2y^{-2-1} \cdot y' = -2y^{-3}y' $ \
  $ z' = -\frac{2}{y^3}y' | \cdot \frac{1}{2} $ => \
  $ \frac{z'}{2} = -\frac{y'}{y^3} $ \
  $
  \begin{drcases}
    \frac{y'}{y^3} = -\frac{z'}{2} \cr
    z = \frac{1}{y^2} \cr
    \frac{xy'}{y^3} - \frac{1}{y^2} - 3x = 0
  \end{drcases}
  $ => $ x(-\frac{z'}{2}) - z - 3x = 0 $ \
  $ \frac{-xz'}{2} - z = 3x | \cdot (-2) $ \
  $ xz' + 2z = -6x | :x $  \
  $ z' + \frac{2}{x} z = -6 $ Ecuatie liniara, neomogena, de ord 1 \
  Ecuatia omogena asociata: \
  $ z' + \frac{2}{x} z = 0 $ \
  $ z' = -\frac{2}{x} z $ \
  $ \frac{z'}{z} = - \frac{2}{x} $ \
  $ z' = \frac{dz}{dx} $ \
  $ \frac{1}{z}\frac{dz}{dx} = -\frac{2}{x} $ \
  $ \frac{dz}{z} = -\frac{2}{x}dx $ \
  $ \int{\frac{dz}{z}} = -2\int{\frac{dx}{x}} + ln(C) $ \
  $ ln(z) = -2ln(x) + ln(C) $ \
  $ ln(z) = ln(x^{-2}) + ln(C) $ \
  $ ln(z) = ln(\frac{C}{x^2}) $ \
  $ \boxed{
    z = \frac{C}{x^2}
  } $ = solutia generala a ecuatiei omogene in $ z $ . \
  Presupunem ca $ C(x) = C $ => $ z = \frac{C(x)}{x^2} $ \
  $ z' = \frac{C'(x)x^2 - 2xC(x)}{x^4} $ \
  $ z' = \frac{x^2C'(x) - 2C(x)}{x^3} $ \
  $ z' + \frac{2}{x} z = -6 $ \
  $ \frac{x^2C'(x) - 2C(x)}{x^3} + \frac{2}{x} \frac{C(x)}{x^2} = -6 | \cdot x^3 $ \
  $ x^2 C'(x) - \cancel{2C(x)} + \cancel{2C(x)} = -6x^3 $ \
  $ x^2C'(x) = -6x^3 $ \
  $ C'(x) = -\frac{6}{x} $ => \
  $ C(x) = -6ln(x) + K $ => \
  $ z(x) = \frac{1}{x^2}C(x) $ \
  $ z(x) = \frac{K-6ln(x)}{x^2} $ \
  $ \boxed{
    z(x) = \frac{K}{x^2} - \frac{6ln(x)}{x^2} 
  } $ \
  Dar $ z(x) = \frac{1}{y^2} $ => $ y^2 = \frac{1}{z(x)} $ \
  $ \boxed{
    y^2 = \frac{1}{\frac{K}{x^2} - \frac{6ln(x)}{x^2}}
  } $

**Ecuatia Riccati** \
**Forma generala** \
$ y' + P(x)y^2 + Q(x)y + R(x) = 0 $ , $ P, Q, R : I \to \R $ ,
continue pe intervalul $I$ .
Solutia generala a acestei ecuatii nu se poate obtine prin integrari de functii
elementare. Totusi solutia sa generala se poate obtine daca se cunosca:
- (a) $y_1$ o solutie particulara a ecuatiei
 => schimbare de functie: $ y = y_1 \plusmn \frac{1}{z} $
- (b) $y_1, y_2$ doua solutii particulare ale ecuatiei
=> schimbare de functie: $ z = \frac{y-y_1}{y-y_2} $
- (c) trei solutii particulare ale ecuatiei

(a) Presupunem ca se cunoaste o solutie particulara $ y_1(x) $ a ecuatiei => \
$ y_1' + P(x)y_1^2 + Q(x)y_1 + R(x) = 0 $. \
Se recomanda schimbare de functie: \
$ y = y_1 \pm \frac{1}{z} $, unde $ z $ = functie necunoscuta. \
Fie $ y = y_1 - \frac{1}{z} $ => \
$ y' = y_1' + \frac{z'}{x^2} $ \
$ y^2 = y_1^2 - 2\frac{y_1}{z} + \frac{1}{z^2} $ \
$ y_1' + \frac{z'}{x^2} + P(x)(y_1^2 - 2\frac{y_1}{z} + \frac{1}{z^2}) + Q(x)(y_1 - \frac{1}{z}) + R(x) = 0 $ \
$ \underbrace{
y_1' + P(x)y_1^2 + Q(x)y_1 + R(x)
}_{=0} + 
\frac{z'}{z^2} - P(x) \frac{2y_1}{z} + \frac{P(x)}{z^2} - \frac{Q(x)}{z} = 0 
$ => \
$ z' - \underline{P(x)z \cdot 2y_1} + P(x) - \underline{Q(x)z} = 0 $ \
$ z' - (2y1 \cdot P(x) + Q(x)) z + P(x) = 0 $ = ecuatie liniara si neomogena de ord 1 \
$ z' + f(x)z + g(x) = 0 $ \
Solutia sa generala va fi: $ z = C\varphi(x) + \psi(x) $ \
$ \boxed{
  y = y_1(x) - \frac{1}{C\varphi(x) + \psi(x)}
} $

**Exemplu** Sa se integreze ecuatia \
$ x^2y' + x^2y^2 + xy - 4 = 0 $ stiind ca $ y_1 = \frac{2}{x} $ este o solutie particulara a sa. \
Facem schimbare de functie $ y = y_1 - \frac{1}{z} $ \
$ y = \frac{2}{x} - \frac{1}{z} $, $ z $ = functie necunoscuta \
$ y' = -\frac{2}{x^2} + \frac{z'}{z^2} $ \
$ x^2(-\frac{2}{x^2} + \frac{z'}{z^2}) + x^2(\frac{4}{x^2} - 4 \cdot \frac{1}{xz} + \frac{1}{z^2}) + x(\frac{2}{x} - \frac{1}{z}) - 4 = 0 $ \
$ - \cancel{2} + \frac{x^2z'}{z^2} + \cancel{4} - 4 \cdot \frac{x}{z} + \boxed{\frac{x^2}{z^2}} + \cancel{2} - \frac{x}{z} - \cancel{4} = 0 $ \
$ \frac{x^2z'}{z^2} - 5\frac{x}{z} + \frac{x^2}{z^2} = 0 | \cdot z^2 $ \
$ xz' - 5xz + x^2 = 0 | :x $ \
$ z' - 5z + x = 0 $ -> ecuatie liniara si neomogena de ordinul 1, in functia necunoscuta $ z $ : \
$ \boxed{
  z = z_o + z_p
}  $

$ z_o $:
--------------------
$ z' - 5z = 0 $ \
$ z' = 5z $ \
$ \frac{z'}{z} = 5 $ \
$ z' = \frac{dz}{dx} $ \
$ \frac{1}{z} \cdot \frac{dz}{dx} = 5 $ \
$ \frac{dz}{z} = 5dx $ \
$ \int(\frac{dz}{z}) = 5\int(dx) + ln(C) $ \
$ \ln(z) = 5x + \ln(C) $ => \
$ z = e^{5x + \ln(C)} $ \
$ \boxed{
  z = C e^{5x}
} $

$ z_p $:
---------------
Pp $ C = C(x) $ => $ z = C(x)e^{5x} $ => \
$ z' = C'(x) e^{5x} + C(x) \cdot 5 \cdot e^{5x} $ \
Dar $ z' - 5x + x = 0 $ => \
$ C'(x)e^{5x} + \cancel{5C(x)e^{5x}} - \cancel{5C(x)e^{5x}} + x = 0 $ \
$ C'(x)e^{5x} = -x $ \
$ C'(x) = -xe^{-5x} $ \
$ C(x) = -\int(xe^{-5x})dx $ \
$
\begin{cases}
f(x) = x \cr
g'(x) = e^{-5x}
\end{cases}
$ => 
$
\begin{cases}
f'(x) = 1 \cr
g(x) = \frac{-e}{5}
\end{cases}
$ => \
$ C(x) = f\cdot g - \int(f'\cdot g)dx $ \
$ C(x) = -x \cdot \frac{e^{-5x}}{5} + \frac{1}{5}\int(e^{-5x})dx = 
\frac{-xe^{-5x}}{5} + \frac{1}{5} \cdot \frac{e^{-5x}}{5} + K $ \
$ C(x) = \frac{e^{-5x}}{5}(-x + \frac{1}{5}) + K $ => \
$ z(x) = C(x) e^{5x} = \frac{e^{-5x}}{5}(-x + \frac{1}{5})e^{5x} + Ke^{5x} =
(-x + \frac{1}{5})\frac{1}{5} + K e^{5x} $

$ \boxed{
  z = z_o + z_p = K e^{5x} + \frac{1}{5}(-x + \frac{1}{5})
} $ => $ y = \frac{2}{x} - \frac{1}{z} $ 

(b) Presupunem ca se cunosc doua solutii particulare ale ecuatiei Riccati: $ y_1 $ si $ y_2 $. \
Se face schimbarea de functie
$ \boxed{
  z = \frac{y-y_1}{y-y_2}
} $, $ z $ = functie necunoscuta. \
Daca ecuatia initiala a sa \
$ y' + P(x)y^2 + Q(x)y + R(x) = 0 $ \
prin aceasta schimbare se transforma in: \
$ z' + P(x)(y_1(x) -y_2(x)) z = 0 $ = ec. liniara si omogena de ordinul 1 in $ z $.
Solutia se obtine pritr-o singura operatie de integrare: \
$ \frac{z'}{z} = P(x)(y_2-y_1) $ \
$ \ln(z) = \int(P(x)(y_2-y_1))dx + \ln(C) $ \
$ \boxed{
  z = C \cdot e^{\int(P(x)(y_2-y_1))dx}
} $ \
$ y $ va rezulta din relatia 
$ \boxed{
  z = \frac{y-y_1}{y-y_2}
} $

**Aplicatie** \
$ x^2y' + (xy - 2)^2 = 0 $ \
$ x^2y' + x^2y^2 - 4xy + 4 = 0 | : x^2 (\ne 0) $ \
$ y' + y^2 - \frac{4}{x} \cdot y + \frac{4}{x^2} = 0 $ \
Ecuatia va avea o solutie de forma 
$ \boxed{
  y = \frac{a}{x}
} $ \
$ y' = -\frac{a}{x^2} $ => \
$ -\frac{a}{x^2} + \frac{a^2}{x^2} - \frac{4}{x} \cdot \frac{a}{x} + \frac{4}{x^2} = 0 | \cdot x^2 $ \
$ a^2 - 5a + 4 = 0 $; $ \Delta = 25 - 16 = 9 $; $ a_{1,2} = \frac{5 \pm 3}{2} $ \
$ \begin{cases}
a_1 = 4 \cr
a_2 = 1
\end{cases} $ => \
$ \begin{cases}
y_1 = \frac{1}{x} \cr
y_2 = \frac{4}{x}
\end{cases} $ => \
$ \boxed{
  z = \frac{y - \frac{1}{x}}{y - \frac{4}{x}}
} $

