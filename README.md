### Live Link

https://react-search-city-maps.surge.sh/home

## TT - Map Exercise

The exercise simulates a simple “Map” tool. By using a combination of Material-UI components and the Google Map API, we would like to make it more functional and user-friendly.

## Installation

```
yarn
yarn start
```

The client is running on http://localhost:3000

## Material UI

This project uses material UI for it's core component library and is customized using the theming
capabilities built in. All new components should first select a base component from
[Material UI](https://mui.com) when possible.

### Code Organization

To order/organize the imports, use the following approach (adding a whitespace in between).

External Imports (not associated with Material UI components)
External Material UI components
Internal constants or utils
Internal components
Internal styles

Example:

```
import React from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { SAMPLE_FIELD } from 'constants'

import CustomComponent from 'components/CustomComponent'

import styles from './CustomButtonStyles'
```
### Conventions for Components

Every component is under the `src/components` folder and it has the following structure:

```
<ComponentName>:
  <ComponentName>.jsx => Component logic
  <ComponentName>Styles.js => Styles associated to the component
```
