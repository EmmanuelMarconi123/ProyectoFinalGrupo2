import styles from "../form/form.module.css";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";

const Form = () => {
  // const [herramienta, setHerramienta] = useState("");

  let initialValues = {
    herramienta: "",
    fecha: "",
  };

  const sendForm = (data) => {
    console.log(data);
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    onSubmit: sendForm,
  });

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} md={5}>
            <TextField
              type="text"
              label="Tipo de Herramienta"
              variant="outlined"
              fullWidth
              name="herramienta"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              type="date"
              variant="outlined"
              fullWidth
              name="fecha"
              onChange={handleChange}
            />
          </Grid>
          <Grid className={styles.boton} item xs={12} md={2}>
            <Button variant="contained" type="submit">
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Form;
