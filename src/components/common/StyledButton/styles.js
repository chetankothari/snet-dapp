import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    styledButton: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "transparent",
        padding: "13px 28px 11px",
        color: theme.palette.text.white,
        textTransform: "uppercase",
        fontFamily: theme.typography.primary.main,
        fontWeight: theme.typography.fontweight,
        letterSpacing: "1.25px",
        lineHeight: "16px",
        "&:disabled": {
            backgroundColor: theme.backgroundColor.disabled,
            color: theme.palette.text.disabled,
        },
    },
    blueBg: {
        backgroundColor: theme.backgroundColor.blue,
        "&:hover": {
            backgroundColor: theme.backgroundColor.white,
            borderColor: theme.palette.text.primary,
            color: theme.palette.text.primary,
        },
    },
    blackBg: {
        backgroundColor: theme.backgroundColor.githubBlack,
        "& i": {
            fontSize: 24,
            marginRight: 5,
        },
        "&:hover": {
            backgroundColor: theme.backgroundColor.white,
            borderColor: theme.backgroundColor.githubBlack,
            color: theme.backgroundColor.githubBlack,
        },
    },
    transparentBg: {
        backgroundColor: "transparent !important",
        color: theme.palette.text.primary,
        "&:disabled": {
            color: "#ccc !important",
        },
    },
}));