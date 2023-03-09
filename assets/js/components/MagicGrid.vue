<template>

    <div :class="[wrapper]">
        <slot/>
    </div>

</template>

<script>

export default {

    name: 'magic-grid',

    props: {
        wrapper: {
            type: String,
            default: 'wrapper'
        },
        gap: {
            type: Number,
            default: 50
        },
        maxCols: {
            type: Number,
            default: 3
        },
        maxColWidth: {
            type: Number,
            default: 500
        },
        animate: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            started: false,
            items: []
        }
    },

    mounted() {
        this.waitUntilReady()
    },

    methods: {
        waitUntilReady() {
            if (this.isReady()) {
                this.positionItems()

                window.addEventListener('resize', () => {
                    setTimeout(this.positionItems(), 200)
                })
            } else this.getReady()
        },

        isReady() {
            return this.$el && this.items.length > 0
        },

        getReady() {
            let interval = setInterval(() => {
                this.items = this.$el.children

                if (this.isReady()) {
                    clearInterval(interval)
                    this.init()
                }
            }, 100)
        },

        init() {
            if (!this.isReady() || this.started) return

            this.$el.style.position = 'relative'

            Array.prototype.forEach.call(this.items, item => {
                item.style.position = 'absolute'
                item.style.maxWidth = this.maxColWidth + 'px'
                if (this.animate) item.style.transition = 'top, left 0.2s ease'
            })

            this.started = true
            this.waitUntilReady()
        },

        colWidth() {
            return this.items[0].getBoundingClientRect().width + this.gap
        },

        setup() {
            let width = this.$el.getBoundingClientRect().width
            let numCols = Math.floor(width / this.colWidth()) || 1
            let cols = []

            if (this.maxCols && numCols > this.maxCols) {
                numCols = this.maxCols
            }

            for (let i = 0; i < numCols; i++) {
                cols[i] = {
                    height: 0,
                    top: 0,
                    index: i
                }
            }

            let wSpace = width - numCols * this.colWidth() + this.gap

            return {
                cols,
                wSpace
            }
        },

        nextCol(cols, i) {
            if (this.useMin) return this.getMin(cols)

            return cols[i % cols.length]
        },

        positionItems () {
            let { cols, wSpace } = this.setup()

            let totalHeights = new Array(cols.length).fill(0)
            let maxHeight = 0

            wSpace = Math.floor(wSpace / 2)

            Array.prototype.forEach.call(this.items, (item, i) => {
                let minHeight = Math.min(...totalHeights)
                let minIndex = totalHeights.indexOf(minHeight)

                let left = minIndex * this.colWidth() + wSpace
                let top = minHeight

                if (this.animate) item.style.transition = 'top, left 0.2s ease'
                item.style.left = left + 'px'
                item.style.top = top + 'px'

                totalHeights[minIndex] += item.getBoundingClientRect().height + this.gap
                maxHeight = Math.max(maxHeight, totalHeights[minIndex])
            })

            this.$el.style.height = maxHeight - this.gap + 'px'
        },

        getMax(cols) {
            let max = cols[0]

            for (let col of cols) {
                if (col.height > max.height) max = col
            }

            return max
        },

        getMin(cols) {
            let min = cols[0]

            for (let col of cols) {
                if (col.height < min.height) min = col
            }

            return min
        }
    }

}

</script>
