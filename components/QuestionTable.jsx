import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "../styles/teacher.module.css";
import { Button } from "@mui/material";

export default function QuestionTable({questions}) {
    return (
        <div className={styles.question__table}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Questions</TableCell>
                <TableCell></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {questions.map((question) => (
                <TableRow
                key={question}
                >
                <TableCell>{question}</TableCell>
                <TableCell align="right"><Button variant="contained">Remove Question</Button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}