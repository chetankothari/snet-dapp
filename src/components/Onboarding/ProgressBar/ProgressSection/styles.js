import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    number: {
        borderRadius: 25,
        padding: "3px 10px",
        marginRight: 10,
        backgroundColor: theme.palette.text.secondary,
        color: theme.palette.text.white,
    },
    TabTitle: {
        color: theme.palette.text.secondary,
        fontSize: 14,
        fontFamily: theme.typography.secondary.main,
    },
}));