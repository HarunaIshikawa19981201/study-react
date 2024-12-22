interface TitleProps {
    title: string;
}

export function Title(props: TitleProps) {
    console.log(props);
    return (
        <h1>
             {props.title}
        </h1>   
    );
}