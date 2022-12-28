# SASS Color functions

## rgb(red, gree, blue)

output:  
#color

---

## rgba(red, green, blue, alpha)

output:  
rgba(number, number, number, 0.5)

---

## mix(color, color-alt, [weight-percentage])

mixes 2 colors together, weight (optional)

outputs: #color

---

## red( color )

gets the red component of a color  
outputs: number

## green(color)

gets the green component of a color  
outputs: number

## blue(color)

gets the blue component of a color  
outputs: number

---

# HSL Functions

create a color from hue, saturation, lightness

## hsl(hue, saturation, lightness)

outputs: #color

---

## hsla(hue, saturation, lightness, alpha)

create a color from hue, saturation, lightness, alpha  
outputs: rgba(number, number, number, 0.5)

---

## adjust-hue(color, amount)

amount in deg eg(color, 20deg)  
outputs: #color

---

## lighten( color, percentage)

percentage has value 0% to 100%  
outputs: #color

---

## darken( color, percentage)

percentage has value 0% to 100%
outputs: #color

---

## saturate( color, percentage)

percentage has value 0% to 100%  
outputs: #color

---

## desaturate( color, percentage)

percentage has value 0% to 100%  
outputs: #color

---

## greyscale(color)

converts a color to greyscale  
outputs: #color

---

## complement(color)

returns the complement of a color  
outputs: #color

---

## invert(color)

returns the inverse of a color  
outputs: #color

---

## hue(color)

gets the hue component of a color  
outputs: 0deg

---

## saturation(color)

gets the saturation component of a color  
outputs: percentage

---

## lightness(color)

gets the lightness component of a color  
outputs: percentage

---

# OPACITY Functions

## rgba(color, alpha )

changes alpha of a color (alpha has value 0 to 1)  
outputs: rgba(number, number, number, 0.5)

---

# OPACITY/FADE-IN

## opacity(color, alpha)

makes a color more opaque  
outputs: #color

---

## fade-in(color, alpha)

makes a color more opaque  
outputs: #color

---

# TRANSPARENTIZE/FADE-OUT

## transparentize(color, amount)

makes a color more transparent  
outputs: rgba(number, number, number, 0.5)

---

## fade-out(color, alpha)

makes a color more transparent  
outputs: rgba(number, number, number, 0.5)

---

# ALPHA/OPACITY

## alpha(color)

gets the alpha component (opacity) of a color  
outputs: 1

---

## opacity(color)

gets the alpha component (opacity) of a color  
outputs: 1

---

# OTHER COLOR Functions

## Adjust color - [] are optional

## adjust-color(color, [red], [green], [blue], [hue], [saturation], [lightness], [alpha])

increase or decreases one or more components of color  
outputs: #color

example:  
adjust-color($color, $red:-50, $green:20, $blue:220)  
output: #3744FF

example:
adjust-color($color, $hue:120deg, $saturation:30, $lightness:10)  
output:#21ab21

---

# SCALE-COLOR

Fluidly scales one or more properties of a color.

## scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])

example:  
scale-color($color, $red: 10%, $green: 90%, $blue: 20%)  
Output: #F9f84f

example:  
scale-color($color, $saturation: -30%, $lightness: 20%, $alpha: 10%)  
output: #dfb665;

---

# CHANGE-COLOR

Changes one or more properties of a color.

## change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])

example:  
change-color($color, $red: 255, $green: 60, $blue: 170)  
Output: #ff3caa

example:  
change-color($color, $hue: 190deg, $saturation: 50%, $lightness: 25%)  
output: #205560

---

# COMPASS COLOR Functions

### adjust-lightness(color, amount)

    Adds $amount to $color's lightness value.
    $amount can be negative.

### adjust-saturation

### scale-lightness

### scale-saturation

### contrast-color

### tint(color, percentage)

    percentage has value 0% to 100%

### shade(color, percentage)

    percentage has value 0% to 100%

---
