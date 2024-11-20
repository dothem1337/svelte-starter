import React, {forwardRef, useEffect, useImperativeHandle} from "react";
import {Player, type PlayerRef} from "@remotion/player";
import {HelloWorld} from "./HelloWorld";

export interface PlayerSchema {
    titleText: string
    titleColor: string
    logoColor1: string
    logoColor2: string
}

export const PlayerView = forwardRef((props: { data: PlayerSchema, onPaused?: () => void }, ref) => {

    const playerRef: React.RefObject<PlayerRef> = React.createRef()

    useEffect(() => {
        if (playerRef.current) {

            // add callback when player pauses
            playerRef.current.addEventListener('pause', () => {
                props.onPaused?.()
            })
        }
    }, [])

    useImperativeHandle(ref, () => ({
        get playerRef() {
            return playerRef.current;
        },
    }));

    return <Player
        ref={playerRef}
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        compositionHeight={1080}
        compositionWidth={1920}
        inputProps={props.data}
        style={{width: '100%'}}
        controls
    />
})
