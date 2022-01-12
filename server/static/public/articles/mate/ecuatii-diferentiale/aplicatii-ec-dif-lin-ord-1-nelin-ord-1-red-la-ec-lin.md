### UTM - Informatica ID an2 
### Curs "Ec dif si sist din" 28.10.2021 

## Aplicatii la ecuatii diferentiale liniare de ordinul 1 si neliniare de ordinul 1 reductibile la ecuatii liniare (Bernoulli si Riccati)

**(2) Ecuatia Bernoulli**: $ y' + P(x)y = Q(x)y^{\alpha} $, $ \alpha \in \\{0, 1\\} $ \
$ y' + \frac{2}{x}y = \frac{\ln(x)}{x} \cdot y^3 $
---------------
Daca $ \alpha > 0 $ => $ y = 0 $ este solutie. Vom verifica la sfarsit daca este singura 
(sau particulara).
- Se imparte ecuatia cu $ y^{\alpha} $ => \
$ \frac{y'}{y^{\alpha}} + P(x)\frac{y}{y^{\alpha}} = Q(x) $ \
$ \frac{y'}{y^{\alpha}} + P(x) \boxed{\frac{1}{y^{\alpha - 1}}} = Q(x) $
- Facem schimbarea de functie \
$ \boxed{ z = \frac{1}{y^{\alpha-1}}} $ \
$ z = y^{1-\alpha} $ => \
$ z' = (1-\alpha)y^{-\alpha}y' $ \
$ z' = (1-\alpha)\frac{y'}{y^{\alpha}} $ \
$ \boxed{
  \frac{y'}{y^{\alpha}} = \frac{z'}{1-\alpha}
} $ \
Ecuatia devine: \
$ \frac{z'} + P(x)z = Q(x) $ = ecuatie liniare de ordinul 1 neomogena. \
$ \boxed{
  z = z_o + z_p
} $ <=> \
$ z = C \cdot f(x) + g(x) $ => \
$ \frac{1}{y^{\alpha - 1}} = C \cdot f(x) + g(x) $ \
$ y^{\alpha - 1} = \frac{1}{Cf(x) + g(x)} $ \
$ y = (\frac{1}{Cf(x) + g(x)})^{\frac{1}{\alpha-1}} $ 
---------------
$ y' + \frac{2}{x} y = \frac{\ln(x)}{x} \cdot y^3 | : y^3 $, $ x > 0 $, $ \alpha = 3 $. \
$ \frac{y'}{y^3} + \frac{2}{x} \cdot \frac{y}{y^3} = \frac{\ln(x)}{x} $ \
$ \frac{y'}{y^3} + \frac{2}{x} \cdot \frac{1}{y^2} = \frac{\ln(x)}{x} $ \
$ z = \frac{1}{y^2} $ = schimbare de functie \
$ z = y^{-2} $ => \
$ z' = -2y^{-3}y' $ \
$ z = (-2)\cdot \frac{y'}{y^3} $ \
$ \frac{y'}{y^3} = -\frac{z'}{2} $ => \
$ \boxed{
  -\frac{z'}{2} + \frac{2}{x} \cdot z = \frac{\ln(y)}{x}
} $ Ecuatie liniara neomogena de ord 1. \
$ \frac{z'}{2} - \frac{2}{x} \cdot z = -\frac{\ln(y)}{x} $ \
$ z = z_o + z_p $ Solutia generala a ec. neomogene; este suma dintre solutia generala a ecuatiei omogene asociate si o solutie particulara a ecuatiei neomogene. \
Ecuatia omogena asociata: $ \frac{z'}{2} - \frac{2}{x} \cdot z = 0 $ \
$ \frac{z'}{2} = \frac{2}{x} \cdot z $ \
$ z' = \frac{dz}{dx} $ \
$ \frac{z'}{2} \cdot \frac{dz}{dx} = \frac{2}{x} \cdot z $ \
$ \frac{dz}{dx} = \frac{4}{x} \cdot z $ \
$ \frac{dz}{z} = \frac{4}{x} \cdot dx $ \
$ \int(\frac{dz}{z}) = 4 \int(\frac{dx}{x}) + \ln(C) $ \
$ \ln(z) = 4 \ln(x) + \ln(C) $ \
$ \ln(z) = \ln(C)x^4 $ \
$ \boxed{
  z_o = C\cdot x^4
} $ \
Pentru determinarea unei solutii particulare a ecuatiei neomogene utilizam metoda variatiei 
constantelor (Lagrange). \
Se presupune ca $ C = C(x) $ si se pune conditia ca aceasta functie sa verifice ecuatia neomogena in functia $ z $ : \
$ \frac{z'}{2} - \frac{2}{x} \cdot z = -\frac{\ln(x)}{x} | \cdot 2 $ \
$ z' - \frac{4}{x} \cdot z = -2 \cdot \frac{\ln(x)}{x} $ \
$ z = C(x) x^4 $ => \
$ z' = C'(x)x^4 + 4C(x)x^3 $ \
$ C'(x)x^4 + \cancel{4C(x)x^3} - \cancel{\frac{4}{x} \cdot C(x) x^4} = -2 \cdot \frac{\ln(x)}{x} $ \
$ C'(x) x^4 = -2\frac{\ln(x)}{x} $ \
$ C'(x) = -2\frac{\ln(x)}{x^5} $ \
$ \boxed{
  C(x) = -2\int(\frac{\ln(x)}{x^5})dx + K
} $
-----------
$ \int(\frac{\ln(x)}{x^5})dx $ se calculeaza prin metoda de integrare prin parti: \
$ \boxed{
  \int(f(x)g'(x))dx = f(x)g(x) - \int(f'(x)g(x))dx
} $ \
$ \boxed{
  \int(x^{\alpha})dx = \frac{x^{\alpha + 1}}{\alpha + 1}
} $ 
-----------
$ f(x) = \ln(x) $ => $ f'(x) = \frac{1}{x} $ \
$ g(x) = \frac{1}{x^5} = x^{-5} $ \
$ g(x) = \int(x^{-5})dx = \frac{x^{-4}}{-4} = -\frac{1}{4x^4} $ \
$ \int(\ln(x) \cdot \frac{1}{x^5})dx = -\ln(x) \cdot \frac{1}{4x^4} - \int(\frac{1}{x} \cdot (-\frac{1}{4x^4}))dx = $ \
$ = -\frac{\ln(x)}{4x^4} + \frac{1}{4} \int(x^{-5})dx = -\frac{\ln(x)}{4x^4} - \frac{x^{-4}}{16} = -\frac{1}{4x^4}(\ln(x) + \frac{1}{4}) $ \
=> $ C(x) = (-2) \cdot (-\frac{1}{4x^4}(\ln(x) + \frac{1}{4})) + K $ \
$ \boxed{
C(x) = K + \frac{1}{2x^4}(\ln(x) + \frac{1}{4})
} | \cdot x^4 $ \
Dar $ z(x) = C(x) x^4 $ \
=> $ z(x) = \underbrace{K \cdot x^4}_{z_o} + \underbrace{\frac{1}{2}(\ln(x) + \frac{1}{4}) }\_{z_p} $ \
$ z = \frac{1}{y^2} = K x^4 + \frac{1}{2}(\ln(x) + \frac{1}{4}) $,
$ \boxed{
  Cf(x) + g(x) 
} $ \
$ \boxed{
  y^2 = \frac{1}{Kx^4 + \frac{1}{2}(\ln(x) + \frac{1}{4})}
} $ = solutia ecuatiei Bernoulli sub forma implicita !

**(2) Ecuatia Riccati** \
$ y' + P(x)y^2 + Q(x)y + R(x) = 0 $ \
Se poate obtine solutia generala a acestei ecuatii in urmatoarele situatii: 

- (a) se cunoaste o solutie particulara a sa: \
Fie aceasta $ y_1(x) $. Prin schimbarea de functie:
$ \boxed{
  y = y_1 \pm \frac{1}{z}
  }
$,
$ z $ =
o suma functie necunoscuta. \
Se obtine o ecuatie liniara, de ordinul 1, **neomogena**, in functia necunoscuta $ z $. \
=> $ z = C \cdot f(x) + g(x) $ => $ y = y_1 \pm \frac{1}{C \cdot f(x) + g(x)} $

- (b) se cunosc doua solutii particulare ale ecuatiei initiale $ y_1(x) $ si $ y_2(x) $.
Prin schimbarea de functie
$ \boxed{
  z = \frac{y - y_1(x)}{y - y_2(x)}
} $, se obtine o ecuatie liniara si **omogena** de ordinul 1.

**Exemplu** \
$ x^2(y' + y^2) = a(xy - 1) | : x^2 $ \
$ y' + y^2 = \frac{a}{x^2}(xy -1 ) $ \
$ y' + y^2 = a \cdot \frac{y}{x} - \frac{a}{x^2} $ \
$ y' + y^2 - \frac{a}{x} \cdot y + \frac{a}{x^2} = 0 $; $ a \ne 1 $ \
Din forma coeficientilor se poate presupune ca ecuatia are o solutie particulara de forma
$ y = \frac{\alpha}{x} $ => \
$ y' = -\frac{\alpha}{x^2} $ \
$ y^2 = \frac{\alpha^2}{x^2} $ => \
$ -\frac{\alpha}{x^2} + \frac{\alpha^2}{x^2} - \frac{a}{x} \cdot \frac{\alpha}{x} + \frac{a}{x^2} = 0 | \cdot x^2 $ \
$ -\alpha + \alpha^2 - a \cdot \alpha + a = 0 $ => \
$ \alpha^2 - (a + 1)\alpha + a = 0 $  \
$ \Delta = (a+1)^2 - 4a = a^2 + 2a + 1 - 4a = a^2 - 2a + 1 = (a-1)^2 $ \
$ \alpha_{1,2} = \frac{a + 1 \pm (a-1)}{2} $ \
$ \begin{cases}
\frac{a + 1 + a - 1}{2} = a \cr
\frac{a + 1 - a + 1}{2} = 1
\end{cases}
$ =>
$
\begin{cases} 
\alpha_1 = a \cr
\alpha_2 = 1
\end{cases}
$ => 
$
\begin{cases}
y_1 = \frac{a}{x} \cr
y_2 = \frac{1}{x}
\end{cases}
$ = doua solutii pentru problema Riccati. \
Fie $ y_1(x) = \frac{a}{x} $ => $ y_1' = -\frac{a}{x^2} $; $ y_1^2 = \frac{a^2}{x^2} $ \
$ y = y_1 - \frac{1}{z} $; $ y = \frac{a}{x} - \frac{1}{z} $, $ z $ = suma functie necunoscuta. \
Ec: $ y' + y^2 - \frac{a}{x} \cdot y + \frac{a}{x^2} = 0 $ \
$ y' = -\frac{a}{x^2} + \frac{z'}{z^2} $ \
$ y^2 = \frac{a^2}{x^2} - \frac{2a}{xz} + \frac{1}{z^2} $ \
Inlocuim in ecuatie: \
$ -\cancel{\frac{a}{x^2}} + \frac{z'}{z^2} + \cancel{\frac{a^2}{x^2}} - \frac{2a}{xz} + \frac{1}{z^2} - \frac{a}{x}(\cancel{\frac{a}{x}} - \frac{1}{z}) + \cancel{\frac{a}{x^2}} = 0 $ \
$ \frac{z'}{z^2} - \frac{2a}{xz} + \frac{1}{z^2} + \frac{a}{xz} = 0 $ \
$ \frac{z'}{z^2} - \frac{a}{xz} + \frac{1}{z^2} = 0 | \cdot z^2 $ => \
$ \boxed{
  z' - \frac{a}{x} \cdot z + 1 = 0 
} $ =>
$ \boxed{
  z = z_o + z+p
} $ \
$ z' - \frac{a}{x} \cdot z = 0 $ = ecuatia omogena asociata \
$ z' = \frac{a}{x} \cdot z $ \
$ \frac{z'}{z} = \frac{a}{x} $ => \
$ \ln(z) = a \cdot \ln(x) + \ln(C) $ \
$ \ln(z) = \ln(x^aC) $ => \
$ \boxed{
  z_o = Cx^a
} $ solutia generala a ecuatiei mogene asociate. \
Pp ca $ C = C(x) $; $ z_o = C(x) x^a $ sa verifice ecuatia neomogena \
$ z' = C'(x)x^a + C(x)ax^{a-1} $. \
=> $ C'(x) x^a + aC(x) x^{a-1} - \frac{a}{x} C(x) x^a + 1 = 0 $ \
$ C'(x) x^a + \cancel{aC(x)x^{a-1}} - \cancel{aC(x)x^{a-1}} + 1 = 0 $ \
$ C'(x) x^a + 1 = 0 $ \
$ C'(x) x^a = -1 $ \
$ C'(x) = -\frac{1}{x^a} $ \
$ C'(x) = -x^{-a} $ => \
$ C(x) = -\int(x^{-a})dx + K $ \
$ C(x) = -\frac{x^{-a+1}}{-a+1} + K $ \
$ \boxed{
  C(x) = \frac{x^{1-a}}{a-1} + K
} $ => \
$ z = C(x) x^a $ \
$ a = (K + \frac{x^{1-a}}{a-1})x^a $ \
$ \boxed{
  z = Kx^a + \frac{x}{a-1} 
} $ \
$ y = y_1 - \frac{1}{z} $ \
$ y_1 = \frac{a}{x} $ \
$ \boxed{
  y = \frac{a}{x} - \frac{1}{Kx^a + \frac{x}{a-1}}
} $
