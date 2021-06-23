import React, { Component } from 'react'

class PageOne extends Component {
    render() {
        return (
            <div className="pageone__main">
                <div className="pageone__main_heading">
                    <h2> Page 1 </h2>
                    <div className="pageone__main_heading_intern">
                        <div style={{marginBottom: "20px"}}>
                            <h1>Intern Development Demo</h1>
                        </div>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: '550'}}>lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit  </p>
                        </div>
                    </div>
                </div>
                <div className="pageone__main_files">
                    <div className="pageone__main_files_main">
                        <div className="pageone__main_files_main_name">
                            file name
                        </div>
                        <div className="pageone__main_files_main_name_uploaded">
                            <div style={{ width:"80%"}}>
                                file2.png
                            </div>
                        </div>
                        <div className="pageone__main_files_main_drag">
                            Drag and drop files or click upload
                        </div>
                        <div className="pageone__main_files_main_button">
                            <div>
                                Upload
                            </div>
                        </div>
                        <div className="pageone__main_files_main_supported">
                            Supported Files Formats: .pdf .jpg .png
                        </div>
                        <div className="pageone__main_files_main_filesize">
                            Max File Size : 50MB
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageOne