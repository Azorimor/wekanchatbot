import {PORT} from './utils/config';
import app from "./app";

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
