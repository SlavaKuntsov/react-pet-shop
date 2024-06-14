export default function CatalogChildren() {
	return (
		<>
			<StartBlock />
			<Breadcrumb
				separator='>'
				items={[
					{
						title: 'Home',
						href: '/'
					},
					{
						title: 'Cat Food'
					}
				]}
			/>
			<CatalogMain>
				<Filter />
				<AllItems productsArray={item.name} />
			</CatalogMain>
		</>
	)
}
