import { room } from '@rpgjs/client'
import { RpgReactContext, useObjects, useCurrentPlayer } from '@rpgjs/client/react'
import { useContext } from 'react'

export default function Test({ gold }) {
    const player = useCurrentPlayer()
    return <>{player?.position?.x}</>
}