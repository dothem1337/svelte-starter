<script lang="ts">
    import PlayerViewWrapper from "../remotion/PlayerViewWrapper.svelte";
    import type {PlayerRef} from "@remotion/player";

    let player = $state<PlayerRef | undefined>()

    let data = $state({
        durationInFrames: 150,
        titleText: "Welcome to Remotion",
        titleColor: "#000000",
        logoColor1: "#91EAE4",
        logoColor2: "#86A8E7",
    })

    function onTitleChanged(value: string) {
        data = {...data, titleText: value}
    }

    function pause() {
        player?.pause()
    }

    function play() {
        player?.play()
    }

    function onPaused() {
        console.log('paused')
    }
</script>

<div class="p-8 space-y-8">
    <h1 class="text-2xl font-semibold">Remotion within Vue</h1>
    <div class="flex flex-col sm:flex-row gap-5">
        <div class="flex-1 border rounded">
            <PlayerViewWrapper bind:player={player} {onPaused} {data}/>
        </div>
        <form class="border rounded p-5 space-y-4">
            <div>
                <label for="titleText" class="block text-sm/6 font-medium text-gray-900">Title text</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="titleText" id="titleText" value={data.titleText} oninput={(e) => onTitleChanged(e.target.value)}
                           class="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                </div>
            </div>
            <div class="flex space-x-2">
                <button
                        onclick={pause}
                        type="button"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Pause
                </button>
                <button
                        onclick={play}
                        type="button"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Play
                </button>
            </div>
        </form>
    </div>
</div>
