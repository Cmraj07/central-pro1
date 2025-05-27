import jss from 'jss'
import preset from 'jss-preset-default'

// Setup JSS with default plugins
jss.setup(preset())

const styles = {
  button: {
    color: 'white',
    background: 'blue',
    padding: '10px',
    '&:hover': {
      background: 'darkblue'
    }
  }
}

const { classes } = jss.createStyleSheet(styles).attach()

document.body.innerHTML = `<button class="${classes.button}">Click Me</button>`