import styles from "styled-components";

export const CountryData = styles.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: ${props => props.theme === 'light' ? '' : '#FFF'};
    transition: all ease 0.2s;

    img {
        width: 440px;
        height: 300px;
    }

    .data--area {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            margin: 0px;
        }
    
        .data--firstArea {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 20px;
            
            p {
                margin: 5px 0px;
                span {
                    font-weight: bold
                }
            }
            
            .language {
                font-weight: normal;
                margin-right: 5px
            }
        }
        
        .border--area {
            margin-top: 20px;
            p {
                font-weight: bold
            }
            
            .borders {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 5px;
                width: 100%;
                
                a {
                    text-decoration: none;
                    color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
                    display: flex;
                    min-height: 25px;
                    background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    font-size: 13px;
                    flex: 1;
                    font-weight: 300;
                    border-radius: 2px;
                    box-shadow: 0px 2px 9px 0px #0000000E;
                }
            }
        }
    }
    
    @media(min-width: 740px) and (max-width: 1023px) {
        & {
            img {
                width: 340px;
                height: 200px;
            }

            .data--area {
                h1 {
                    font-size: 28px
                }

                .data--firstArea {
                    p, span {
                        font-size: 14px;
                    }
                }

                .border--area {
                    p, span, a {
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media(min-width: 618px) and (max-width: 739px) {
        img {
            width: 280px;
            height: 180px;
        }
        .data--area {
            h1 {
                font-size: 28px
            }

            .data--firstArea {
                p, span {
                    font-size: 14px;
                }
            }

            .border--area {
                p, span, a {
                    font-size: 14px;
                }
            }
        }
    }

    @media(min-width: 441px) and (max-width: 617px) {
        & {
            grid-template-columns: 1fr;

            img {
                width: 280px;
                height: 180px;
                margin: auto;
            }

            .data--area {
                width: 280px;
                margin: auto;
                margin-top: 30px;

                .data--firstArea {
                    grid-template-columns: 1fr;

                    .topLevel {
                        margin-top: 40px
                    }
                }

                .border--area {
                    .borders {
                        grid-template-columns: repeat(3, 1fr)
                    }
                }
            }
        }
    }

    @media(max-width: 440px) {
        & {
            grid-template-columns: 1fr;

            img {
                width: 280px;
                height: 180px;
                margin: auto;
            }

            .data--area {
                width: 280px;
                margin: auto;
                margin-top: 30px;

                h1 {
                    font-size: 17px
                }

                .data--firstArea {
                    grid-template-columns: 1fr;
                    p, span {
                        font-size: 12px;
                    }

                    .topLevel {
                        margin-top: 40px
                    }
                }

                .border--area {
                    .borders {
                        grid-template-columns: repeat(3, 1fr)
                    }
                    p, span, a {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`