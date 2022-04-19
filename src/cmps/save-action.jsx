import { CSVLink, CSVDownload } from "react-csv";
import { downloadService } from "../services/download.service"

export const SaveAction = (props) => {
    const { domain } = props
    const csvData = downloadService.getCsvData(domain)

    const downloadJsonFile = async () => {
        downloadService.downloadFile(domain)
    }

    return (
        <section className="save-actions">
            Download As:
            <button className="download-btn" onClick={downloadJsonFile}>JSON</button>
            <button className="download-btn">
                <CSVLink className="clean-link" data={csvData}>CSV</CSVLink>
            </button>
        </section>
    )
}