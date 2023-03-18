interface IListItem {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ListItem = ({ icon, children }: IListItem) => {
  return (
    <div className="flex items-center text-white hover:bg-secondary px-3">
      <div className="flex-shrink-0 w-4 mr-4">{icon}</div>
      <div>{children}</div>
    </div>
  );
};

export default ListItem;
