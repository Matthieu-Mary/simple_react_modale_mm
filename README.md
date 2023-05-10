## Getting Started

Install this package:

```shell
npm add typescript-simple-react-modale-mm
```

Import the Modale component:

```js
import { Modale } from "typescript-simple-react-modale-mm";
```

You can then render the `Modale` component like any other React component in JSX.

## Example

```js
import { Modale } from "typescript-simple-react-modale-mm";
import { useState } from "react";

const App = () => {
  const [showModale, setShowModale] = useState(false);

    const handleCLose = () => {
        setShowModale(false);
    }

  return (
    <div>
      <button onClick={() => setShowModale(true)}>Open Modal</button>
      {showModale ?? (
        <Modale
          onClose={handleClose}
          imageSrc={closeBtn}
          imageName="close button"
          text="Say something usefull"
          linkText="Go to somewhere"
          linkPath="/"
        />
      )}
    </div>
  );
};
```
