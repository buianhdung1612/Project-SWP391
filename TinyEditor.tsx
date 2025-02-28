import { Editor } from '@tinymce/tinymce-react';

interface TinyEditorProps {
    value: string;
    onEditorChange: (content: string) => void;
}

const TinyEditor: React.FC<TinyEditorProps> = ({ value, onEditorChange }) => {
    return (
        <div>
            <Editor
                apiKey='cjlgkpm42v7mu4b6biit5pt93hgok2oiqf6p2slv9n95xdc1' // Thay thế bằng API key của bạn
                value={value}
                init={{
                    height: 350,
                    plugins: [
                        'a11ychecker', 'accordion', 'advlist', 'anchor', 'autolink', 'autosave',
                        'charmap', 'code', 'codesample', 'directionality', 'emoticons', 'exportpdf',
                        'exportword', 'fullscreen', 'help', 'image', 'importcss', 'importword',
                        'insertdatetime', 'link', 'lists', 'markdown', 'math', 'media', 'nonbreaking',
                        'pagebreak', 'preview', 'quickbars', 'save', 'searchreplace', 'table',
                        'visualblocks', 'visualchars', 'wordcount'
                    ],
                    toolbar:
                        'undo redo | accordion accordionremove | \
                      importword exportword exportpdf | math | \
                      blocks fontfamily fontsize | bold italic underline strikethrough | \
                      align numlist bullist | link image | table media | \
                      lineheight outdent indent | forecolor backcolor removeformat | \
                      charmap emoticons | code fullscreen preview | save print | \
                      pagebreak anchor codesample | ltr rtl',
                    menubar: 'file edit view insert format tools table help',
                    content_style: `
                        body {
                            font-size: 16px; /* Thay đổi font-size mặc định */
                        }
                    `,
                    font_size_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
                    font_formats: 'Arial=arial,helvetica,sans-serif;' +
                        'Georgia=georgia,palatino;' +
                        'Tahoma=tahoma,arial,helvetica,sans-serif;' +
                        'Times New Roman=times new roman,times;' +
                        'Verdana=verdana,geneva;',
                }}
                onEditorChange={onEditorChange}
            />
        </div>
    );
};

export default TinyEditor;