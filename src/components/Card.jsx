import theme from "../styles/theme";

const StyledCard = `
    width: 20%;
    height: 200px;
    background-color: ${theme.colors.card};
    color: ${theme.colors.text};
`;

export default function Card(props) {
	return <div style={StyledCard}>{props.children}</div>;
}
