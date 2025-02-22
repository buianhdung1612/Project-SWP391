import { Editor } from '@tinymce/tinymce-react';

interface TinyEditorProps {
    value: string;
    onEditorChange: (content: string) => void;
}

const TinyEditor: React.FC<TinyEditorProps> = ({ value, onEditorChange }) => {
    return (
        <div>
            <Editor
                apiKey='cjlgkpm42v7mu4b6biit5pt93hgok2oiqf6p2slv9n95xdc1...'
                value={value}
                init={{
                    height: 350,
                    plugins: 'autolink lists link image',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
                    menubar: false,
                    content_style: `
                        body {
                            font-size: 14px
                        }
                    `
                }}
                onEditorChange={onEditorChange}
            />
        </div>
    );
};

export default TinyEditor;