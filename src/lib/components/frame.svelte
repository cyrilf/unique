<div class="frame">
	<div class="frame--inner">
		<slot />
	</div>
</div>

<style>
	.frame {
		border: solid rgba(0, 0, 0, 1) 12px;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
		margin: 0 auto;
	}

	.frame--inner {
		border: 24px solid rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.3) inset;
		background-color: white;
		padding: 10px;
	}
</style>
